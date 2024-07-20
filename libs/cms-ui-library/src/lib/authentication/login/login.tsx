import { useState } from 'react';
import styles from './login.module.scss';
import axios from 'axios';
import { UserLoginRequestDto } from '../../data-transfer-object/user/user-login-request/user-login-request.dto';
import { AccessTokenResponse, AuthenticationService } from '../../cms-api/v1';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [userLoginRequest, setUserLoginRequest] = useState<UserLoginRequestDto>(
    new UserLoginRequestDto()
  );

  // handle changes in the ui for the email field
  const handleEmailChange = (e: { target: { value: string } }) => {
    setUserLoginRequest({
      ...userLoginRequest,
      email: e.target.value,
    });
  };

  // handle changes in the ui for the password field
  const handlePasswordChange = (e: { target: { value: string } }) => {
    setUserLoginRequest({
      ...userLoginRequest,
      password: e.target.value,
    });
  };

  // handle login button being clicked
  const LoginHandler = async () => {
    AuthenticationService.authenticationApiControllerLogin(userLoginRequest)
      .then((response: AccessTokenResponse) => {
        sessionStorage.setItem('access_token', response.accessToken);
        sessionStorage.setItem('refresh_token', response.refreshToken);
        alert('Login Successful');
      })
      .catch(() => {
        alert('Login Failed');
      });
  };

  return (
    <div className={styles['container']}>
      <div className={styles['login-container']}>
        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="pwd"
            placeholder="Enter password"
            name="pswd"
            onChange={handlePasswordChange}
          />
        </div>
        <div className="form-check mb-3">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              name="remember"
            />{' '}
            Remember me
          </label>
        </div>
        <div className="form-check mb-3">
          <a href="/register">Don't have an account? Sign Up</a>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={LoginHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Login;
