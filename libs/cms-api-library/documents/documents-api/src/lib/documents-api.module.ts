import { Module } from '@nestjs/common';
import { DocumentsApiController } from './documents-api.controller';
import { DocumentsService, DocumentsServiceModule } from '@cms-documents-service';
import { DocumentsRepositoryModule } from '@cms-documents-repository';
import { AuthenticationApiModule } from '@cms-authetication-api';
import { CommonFunctionsService } from '@cms-common-functions';

@Module({
  controllers: [DocumentsApiController],
  providers: [DocumentsService, CommonFunctionsService],
  exports: [],
  imports: [DocumentsServiceModule, DocumentsRepositoryModule, AuthenticationApiModule]
})
export class DocumentsApiModule { }
