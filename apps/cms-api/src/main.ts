/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
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
