import { useEffect, useState } from 'react';
import Keyclock from 'keycloak-js';

const useAuth = () => {
  const [isLogin, setLogin] = useState(false);
  useEffect(() => {
    const client = new Keyclock({
      url: process.env.NX_KEYCLOCK_URL,
      clientId: process.env.NX_KEYCLOCK_CLIENTID!,
      realm: process.env.NX_KEYCLOCK_REALM!,
    });

    client
      .init({
        onLoad: 'login-required',
      })
      .then((response) => {
        setLogin(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return { isLogin };
};

export default useAuth;
