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
    let refreshInterval: NodeJS.Timeout;

    initKeycloak()
      .then((kc) => {
        if (kc.token) {
          sessionStorage.setItem('access_token', kc.token);
          setToken(kc.token);
        }
        setAuthenticated(kc.authenticated ?? false);

        // Refresh token every 60s (adjust based on token expiry)
        refreshInterval = setInterval(() => {
          kc.updateToken(60) // Try to refresh if token expires in 60s
            .then((refreshed) => {
              if (refreshed) {
                console.log('Token refreshed', kc.token);
                sessionStorage.setItem('access_token', kc.token as string);
                setToken(kc.token as string);
              } else {
                console.log('Token still valid');
              }
            })
            .catch(() => {
              console.error('Failed to refresh token, logging out');
              kc.logout();
            });
        }, 60000); // 60s interval
      })
      .catch(console.error);

    return () => {
      if (refreshInterval) {
        clearInterval(refreshInterval);
      }
    };
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, token }}>
      {isAuthenticated ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};
