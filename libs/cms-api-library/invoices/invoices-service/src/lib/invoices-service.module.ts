import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices-service.service';
import { InvoicesRepositoryModule } from '@cms-invoices-repository';

@Module({
  controllers: [],
  providers: [InvoicesService, InvoicesRepositoryModule],
  exports: [InvoicesService],
  imports: [InvoicesRepositoryModule]
})
export class InvoicesServiceModule {}
