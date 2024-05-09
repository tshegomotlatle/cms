import { Module } from '@nestjs/common';
import { InvoicesApiController } from './invoices-api.controller';

@Module({
  controllers: [InvoicesApiController],
  providers: [],
  exports: [],
})
export class InvoicesApiModule {}
