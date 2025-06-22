import { co } from '@fullcalendar/core/internal-common';
import Keycloak from 'keycloak-js';

const keycloakUrl = process.env['NX_KEYCLOCK_URL'];
if (!keycloakUrl) {
  throw new Error("NX_KEYCLOCK_URL is not defined");
}

const keycloakRealm = process.env['NX_KEYCLOCK_REALM'];
if (!keycloakRealm) {
  throw new Error("NX_KEYCLOCK_REALM is not defined");
}
const keycloakClientId = process.env['NX_KEYCLOCK_CLIENTID'];
if (!keycloakClientId) {
  throw new Error("NX_KEYCLOCK_CLIENTID is not defined");
}

const keycloak = new Keycloak({
  url: keycloakUrl,
  realm: keycloakRealm,
  clientId: keycloakClientId,
});
export type KeycloakInstance = typeof keycloak;
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
