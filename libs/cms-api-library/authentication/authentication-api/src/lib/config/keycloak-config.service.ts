import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    
    return {
      authServerUrl: "http://localhost:8080", //your URL Keycloak server
      realm: "cms-realm", //realms that used for this app
      clientId: "cms-api", //client id for this app
      secret: "Dn5cZaeRlVo3WewuEvF0LnQC3LjHHrEH", //secret for this app
      realmPublicKey: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAoOsFsenf0jDXQmfB0+D5IiSvegEFq4LnDtGp2BbIm1dm2lxN6yOd+O3I8y88sgLfOYZZVqPPxXwg6riNWd2EA9hvOLxG8+D39Ks5345j7ErgET/2S4Kk8T+tiLYJh9Bo+vR8Z7zEBOFeg64bhkYX6NgSmxYpcO32FfFbqXgc7iRENl6exbzjn0+p8pqbwwmbS88146kKWIRimNNA2kRXp2cPBOMBaQn+Yezqax4LO0qzY7ArKQETmpyxFkQ96QA8ZOmEziIlmr1PTzSZJdGo0Sfue0j26zcX9eqbBOBxyTqGvD/Bwb/odm/1/hOjGfb9Kq2MlnoAWlRgA7GQVdG0zwIDAQAB",
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