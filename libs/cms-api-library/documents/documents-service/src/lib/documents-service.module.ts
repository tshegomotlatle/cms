import { Module } from '@nestjs/common';
import { DocumentsService } from './documents-service.service';
import { DocumentsRepositoryModule } from '@cms-documents-repository';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [DocumentsRepositoryModule]
})
export class DocumentsServiceModule {}
