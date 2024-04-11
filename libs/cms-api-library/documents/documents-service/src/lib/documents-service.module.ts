import { Module } from '@nestjs/common';
import { DocumentsServiceService } from './documents-service.service';

@Module({
  controllers: [],
  providers: [DocumentsServiceService],
  exports: [DocumentsServiceService],
})
export class DocumentsServiceModule {}
