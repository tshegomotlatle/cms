import styles from './cms-ui-library.module.scss';
import Navigation from './navigation/navigation';
import axios, { AxiosRequestConfig } from 'axios';
import 'core-js/stable/atob';
import { AccessTokenResponse, AuthenticationService } from './cms-api/v1';

/* eslint-disable-next-line */
export interface CmsUiLibraryProps {}
interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

export function CmsUiLibrary(props: CmsUiLibraryProps) {
  axios.defaults.baseURL = 'http://localhost:3000';
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
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config.__isRetryRequest
    ) {
      console.log('Getting refresh token');
      error.config.__isRetryRequest = true;

      const originalRequest: AxiosRequestConfig = error.config;

      const refreshToken = sessionStorage.getItem('refresh_token');
      if (!isRefreshing) {
        isRefreshing = true;
        if (refreshToken) {
          AuthenticationService.authenticationApiControllerRefreshToken({
            refreshToken: refreshToken,
          })
            .then((response: AccessTokenResponse) => {
              isRefreshing = false;
              if (response.accessToken !== '') {
                sessionStorage.setItem('access_token', response.accessToken);
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
