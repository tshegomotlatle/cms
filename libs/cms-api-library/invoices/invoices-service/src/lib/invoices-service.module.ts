import { Module } from '@nestjs/common';
import { InvoicesServiceService } from './invoices-service.service';

@Module({
  controllers: [],
  providers: [InvoicesServiceService],
  exports: [InvoicesServiceService],
})
export class InvoicesServiceModule {}
