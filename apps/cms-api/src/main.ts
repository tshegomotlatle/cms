/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {

  //Create application
  const app = await NestFactory.create<NestExpressApplication>(AppModule,{cors:true});

  

  //Set global api prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  //Enable cors
  app.enableCors();

  // Add payload size limit
  app.useBodyParser('json', { limit: '10mb' });

  //Add Validation
  app.useGlobalPipes(new ValidationPipe());

  //Add Swagger
  const config = new DocumentBuilder()
    .setTitle('Case-Management-System')
    .setDescription('API for CMS')
    .setVersion('1.0')
    .addTag('cms')
    .addBearerAuth()
    .addOAuth2({
      type: 'oauth2',
      flows: {
        authorizationCode: {
          authorizationUrl: 'http://localhost:8080/realms/cms-realm/protocol/openid-connect/auth',
          tokenUrl: 'http://localhost:8080/realms/cms-realm/protocol/openid-connect/token',
          scopes: {
            openid: 'OpenID Connect scope',
            profile: 'Profile scope',
            email: 'Email scope',
          },
        },
      },
    })
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
      oauth2RedirectUrl: 'http://localhost:3000/api/oauth2-redirect.html',
      initOAuth: {
        clientId: process.env.KEYCLOAK_CLIENT_ID || '',
        realm: process.env.KEYCLOAK_REALM || '',
        appName: 'NestJS CMS API',
        scopes: ['openid', 'profile', 'email'],
        usePkceWithAuthorizationCodeGrant: true,
        clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || '',
      },
    },
  });

  //Assign and listen to port
  const port = process.env.PORT || 3000;
  await app.listen(port, '0.0.0.0');
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
