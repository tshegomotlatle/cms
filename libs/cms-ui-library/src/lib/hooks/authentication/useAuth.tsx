import React, { useEffect, useState, createContext, ReactNode } from 'react';
import keycloak, { initKeycloak } from './keyclock';

export const AuthContext = createContext({
  isAuthenticated: false,
  token: '',
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    initKeycloak()
      .then((kc) => {
        console.log(kc.token);
        if (kc.token)
          sessionStorage.setItem('access_token', kc.token);
        setAuthenticated(kc.authenticated ?? false);
        setToken(kc.token ?? '');
      })
      .catch(console.error);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token }}>
      {isAuthenticated ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};
