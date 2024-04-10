/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  //Create application
  const app = await NestFactory.create(AppModule);

  //Set global api prefix
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  //Enable cors
  app.enableCors()

  //Add Swagger
  const config = new DocumentBuilder()
    .setTitle('Case-Management-System')
    .setDescription('API for CMS')
    .setVersion('1.0')
    .addTag('cms')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  //Assign and listen to port
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
