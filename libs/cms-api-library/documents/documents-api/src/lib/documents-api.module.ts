import { Module } from '@nestjs/common';
import { DocumentsApiController } from './documents-api.controller';

@Module({
  controllers: [DocumentsApiController],
  providers: [],
  exports: [],
})
export class DocumentsApiModule {}
