import { SetStateAction, useState } from 'react';
import styles from './login.module.scss';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {

    const API_URL = import.meta.env.VITE_API_URL;


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(e.target.value);
  };

  const LoginHandler = async () => {
    await fetch(API_URL + 'api/authentication/login', {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((res: { access_token: string }) => {
        console.log(res);
        sessionStorage.setItem('access_token', res.access_token);
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
            value={email}
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
            value={password}
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
