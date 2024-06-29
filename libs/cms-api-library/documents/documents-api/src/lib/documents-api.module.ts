import { Module } from '@nestjs/common';
import { DocumentsApiController } from './documents-api.controller';
import { DocumentsService, DocumentsServiceModule } from '@cms-documents-service';
import { DocumentsRepositoryModule } from '@cms-documents-repository';
import { AuthenticationApiModule, CurrentUserService } from '@cms-authetication-api';

@Module({
  controllers: [DocumentsApiController],
  providers: [DocumentsService, CurrentUserService],
  exports: [],
  imports:[DocumentsServiceModule, DocumentsRepositoryModule, AuthenticationApiModule]
})
export class DocumentsApiModule {}
