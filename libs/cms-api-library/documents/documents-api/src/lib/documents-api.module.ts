import { Module } from '@nestjs/common';
import { DocumentsApiController } from './documents-api.controller';
import { DocumentsService, DocumentsServiceModule } from '@cms-documents-service';
import { DocumentsRepositoryModule } from '@cms-documents-repository';

@Module({
  controllers: [DocumentsApiController],
  providers: [DocumentsService],
  exports: [],
  imports:[DocumentsServiceModule, DocumentsRepositoryModule]
})
export class DocumentsApiModule {}
