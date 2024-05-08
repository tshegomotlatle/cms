import styles from './cms-ui-library.module.scss';
import Navigation from './navigation/navigation';
import axios, { AxiosRequestConfig } from 'axios';
import { jwtDecode } from 'jwt-decode';

/* eslint-disable-next-line */
export interface CmsUiLibraryProps {}
interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

export function CmsUiLibrary(props: CmsUiLibraryProps) {
  axios.defaults.baseURL = 'http://localhost:3000/api';
  const refreshAndRetryQueue: RetryQueueItem[] = [];
  let isRefreshing = false;

  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      let token: string | null;
      if (config.headers.isRetryRequest) {
        token = sessionStorage.getItem('refresh_token');
      } else {
        token = sessionStorage.getItem('access_token');
      }
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    function (error) {
      // Do something with request error
      console.log(error);
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(undefined, async function (error) {
    // Get refresh token on request fail with error status 401 unauthorized
    console.log(error.config);
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      console.log('Getting refresh token');
      error.config.__isRetryRequest = true;

      const originalRequest: AxiosRequestConfig = error.config;

      const token = sessionStorage.getItem('refresh_token');
      if (!isRefreshing) {
        isRefreshing = true;
        if (token) {
          const user: { userId: string; username: string } = jwtDecode(token);
          console.log(user);
          await axios
            .post(
              '/authentication/refreshToken',
              {
                email: user.username,
                refreshToken: token,
              },
              {
                headers: {
                  isRetryRequest: true,
                },
              }
            )
            .then((response) => {
              isRefreshing = false;
              if (response.data.accessToken !== '') {
                sessionStorage.setItem(
                  'access_token',
                  response.data.accessToken
                );
                refreshAndRetryQueue.forEach(({ config, resolve, reject }) => {
                  axios
                    .request(config)
                    .then((response) => resolve(response))
                    .catch((err) => reject(err));
                });
                refreshAndRetryQueue.length = 0;
              }
              return axios(originalRequest);
            })
            .catch((response) => {
              console.log(response);
            });
        }
      }
      return new Promise<void>((resolve, reject) => {
        refreshAndRetryQueue.push({ config: originalRequest, resolve, reject });
      });
    }
  });

  return (
    <div className={styles['container']}>
      <Navigation />
    </div>
  );
}

export default CmsUiLibrary;
