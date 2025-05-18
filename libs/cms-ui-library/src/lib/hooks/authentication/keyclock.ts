import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: process.env['NX_KEYCLOCK_URL']!,
  realm: process.env['NX_KEYCLOCK_REALM']!,
  clientId: process.env['NX_KEYCLOCK_CLIENTID']!,
});

let initialized = false;

export const initKeycloak = async () => {
  if (!initialized) {
    await keycloak.init({
      onLoad: 'login-required',
      redirectUri: window.location.origin,
      checkLoginIframe: false,
    });
    initialized = true;
  }
  return keycloak;
};

export default keycloak;
