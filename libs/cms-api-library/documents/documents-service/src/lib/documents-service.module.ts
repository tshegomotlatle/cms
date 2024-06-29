import { Module } from '@nestjs/common';
import { DocumentsRepositoryModule } from '@cms-documents-repository';
import { CurrentUserService } from '@cms-authetication-api';

@Module({
  controllers: [],
  providers: [CurrentUserService],
  exports: [],
  imports: [DocumentsRepositoryModule]
})
export class DocumentsServiceModule {}
