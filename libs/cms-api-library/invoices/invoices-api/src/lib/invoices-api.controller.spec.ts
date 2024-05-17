import { Test } from '@nestjs/testing';
import { InvoicesApiController } from './invoices-api.controller';
import { InvoicesService } from '@cms-invoices-service';
import { InvoicesRespository } from '@cms-invoices-repository';
import { PrismaClient } from '@prisma/client';
import { JwtModule } from '@nestjs/jwt';

describe('InvoicesApiController', () => {
  let controller: InvoicesApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvoicesService, InvoicesRespository, PrismaClient, JwtModule],
      controllers: [InvoicesApiController],
      imports: [PrismaClient, JwtModule]
    }).compile();

    controller = module.get(InvoicesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
