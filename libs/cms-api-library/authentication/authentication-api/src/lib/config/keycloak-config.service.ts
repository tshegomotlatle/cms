import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    
    return {
      authServerUrl: "http://localhost:8080", //your URL Keycloak server
      realm: "cms-realm", //realms that used for this app
      clientId: "cms-api", //client id for this app
      secret: "Q3oyTVl2LOHBtQisbQFkVlJ0lU5rWhLW", //secret for this app
      realmPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA21DiMR0ii3mRzv1HgJhV45OO6pnDXbSef9Spic1gQcDLkAMoE2wccEoY9LlNpR7Od+JBbgGqI6SVM8f5Y4iPrahvVFsC6/KnDyFIeEl/Z3+YAqEAlPSLRrNmzmOZY7qchqc2ZoyIwTNDGmWHGbnzMVYvlwxYgLr+ai7NjtGsODTpXMIFjNFmuTGTJlp5+TX6y6uPptP0x909VfPPeYI0nnIkAFjddJR9XtHL/Zw7nxMLFbOep7E/CySLlrJ8kAm3/t67ZsmQiDoxcVzGqAetH3R9/UrFY/cDxjhPtXkCGG6wVeCd3U46Rlp9MetdVA837rkvnlW/2qUGrb7uRlTBzQIDAQAB",
      logLevels: ['verbose'],
      
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