import { Module } from '@nestjs/common';
import { DocumentsRepositoryModule } from '@cms-documents-repository';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [DocumentsRepositoryModule]
})
export class DocumentsServiceModule {}
