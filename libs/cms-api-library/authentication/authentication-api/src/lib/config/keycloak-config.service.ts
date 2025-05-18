import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    
    return {
      authServerUrl: "127.0.0.1", //your URL Keycloak server
      realm: "cms-realm", //realms that used for this app
      clientId: "cms-react", //client id for this app
      secret: "qLFJUPTnIDifi0zaBAkNTDex66jXXCMD", //secret for this app
      logLevels: ['verbose'],
      useNestLogger: false, 
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    };
  }
}