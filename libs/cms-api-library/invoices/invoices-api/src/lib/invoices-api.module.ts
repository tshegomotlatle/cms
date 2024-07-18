import { Module } from '@nestjs/common';
import { InvoicesApiController } from './invoices-api.controller';
import { InvoicesService } from '@cms-invoices-service';
import { InvoicesRespository } from '@cms-invoices-repository';
import { JwtModule } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import { CommonFunctionsService } from '@cms-common-functions';

@Module({
  controllers: [InvoicesApiController],
  providers: [InvoicesService, InvoicesRespository, JwtModule, PrismaClient, CommonFunctionsService],
  exports: [],
  imports: []
})
export class InvoicesApiModule { }
