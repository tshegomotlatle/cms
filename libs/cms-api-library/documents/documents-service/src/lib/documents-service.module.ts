import { Module } from '@nestjs/common';
import { DocumentsRepositoryModule } from '@cms-documents-repository';
import { CommonFunctionsService } from '@cms-common-functions';

@Module({
  controllers: [],
  providers: [CommonFunctionsService],
  exports: [],
  imports: [DocumentsRepositoryModule]
})
export class DocumentsServiceModule {}
