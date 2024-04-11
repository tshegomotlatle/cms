import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationApiModule } from '@cms-authetication-api';
import { CourtCasesApiModule } from '@cms-court-cases-api';
import { DocumentsApiModule } from '@cms-documents-api';

@Module({
  imports: [AuthenticationApiModule, CourtCasesApiModule, DocumentsApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
