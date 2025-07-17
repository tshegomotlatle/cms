import { Injectable, LogLevel } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    
    return {
      authServerUrl: process.env['KEYCLOAK_AUTH_SERVER_URL'],
      realm: process.env['KEYCLOAK_REALM'],
      clientId: process.env['KEYCLOAK_CLIENT_ID'],
      secret: process.env['KEYCLOAK_CLIENT_SECRET'] || "",
      realmPublicKey: process.env['KEYCLOAK_REALM_PUBLIC_KEY'],
      logLevels: process.env['KEYCLOAK_LOG_LEVELS']?.split(',') as LogLevel[],

      
      // Configure token validation
      bearerOnly: true,
      verifyTokenAudience: false,
      
      // IMPORTANT: Set strict enforcement mode for roles
      policyEnforcement: PolicyEnforcementMode.ENFORCING,
      
      // Use permissive token validation to avoid connection issues
      tokenValidation: TokenValidation.OFFLINE,
      
      // Enable role mapping to properly extract roles from tokens
      useNestLogger: true
    };
  }
}