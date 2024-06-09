import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationApiModule } from '@cms-authetication-api';
import { CourtCasesApiModule } from '@cms-court-cases-api';
import { DocumentsApiModule } from '@cms-documents-api';
import { InvoicesApiModule } from '@cms-invoices-api';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [AuthenticationApiModule, CourtCasesApiModule, DocumentsApiModule, InvoicesApiModule, ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'cms-api'),
    exclude: ['/api/(.*)'],
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
