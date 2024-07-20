import { useState } from 'react';
import styles from './register.module.scss';
import axios, { AxiosResponse } from 'axios';
import { UserDto } from '../../data-transfer-object/user/user.dto';
import {
  AccessTokenResponse,
  AuthenticationService,
  UserRegisterRequest,
} from '../../cms-api/v1';

/* eslint-disable-next-line */
export interface RegisterProps {}

export function Register(props: RegisterProps) {
  const [user, setUser] = useState<UserRegisterRequest>(
    new Object() as UserRegisterRequest
  );
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleNameChange = (e: { target: { value: string } }) => {
    setUser({
      ...user,
      name: e.target.value,
    });
  };

  const handleEmailChange = (e: { target: { value: string } }) => {
    setUser({
      ...user,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e: { target: { value: string } }) => {
    setUser({
      ...user,
      password: e.target.value,
    });
  };

  const handleSurnameChange = (e: { target: { value: string } }) => {
    setUser({
      ...user,
      surname: e.target.value,
    });
  };

  const handleMobileChange = (e: { target: { value: string } }) => {
    setUser({
      ...user,
      mobileNumber: e.target.value,
    });
  };

  const handlePasswordConfirmChange = (e: { target: { value: string } }) => {
    setPasswordConfirm(e.target.value);
  };

  const LoginHandler = async () => {
    if (passwordConfirm !== user.password)
      return showError('Passwords do not match');

    AuthenticationService.authenticationApiControllerRegister(user)
      .then((response: AccessTokenResponse) => {
        sessionStorage.setItem('access_token', response.accessToken);
        sessionStorage.setItem('refresh_token', response.refreshToken);
        alert('Register Successful');
      })
      .catch(() => {
        alert('Register Failed');
      });
  };

  const showError = (error: string) => {
    alert(error);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['register-container']}>
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
            value={user.email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            name="name"
            value={user.name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="surname" className="form-label">
            Surname:
          </label>
          <input
            type="text"
            className="form-control"
            id="surname"
            placeholder="Enter surname"
            name="surname"
            value={user.surname}
            onChange={handleSurnameChange}
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="mobile" className="form-label">
            Mobile:
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile"
            placeholder="Enter mobile number"
            name="text"
            value={user.mobileNumber}
            onChange={handleMobileChange}
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
            name="password"
            value={user.password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pwd" className="form-label">
            Confirm Password:
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirm"
            placeholder="Confirm password"
            name="pswd"
            value={passwordConfirm}
            onChange={handlePasswordConfirmChange}
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
          <a href="/register">Have an account already? Login</a>
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

export default Register;
