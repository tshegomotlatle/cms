import styles from './cms-ui-library.module.scss';
import Navigation from './navigation/navigation';
import axios, { AxiosRequestConfig } from 'axios';
import 'core-js/stable/atob';
import { AccessTokenResponse, AuthenticationService } from './cms-api/v1';

/* eslint-disable-next-line */
export interface CmsUiLibraryProps {}

export function CmsUiLibrary(props: CmsUiLibraryProps) {
  axios.defaults.baseURL = 'http://localhost:3000';

  axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      const token = sessionStorage.getItem('access_token');
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

  return (
    <div className={styles['container']}>
      <Navigation />
    </div>
  );
}

export default CmsUiLibrary;
