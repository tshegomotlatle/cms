import { Test } from '@nestjs/testing';
import { InvoicesService } from './invoices-service.service';
import { JwtModule } from '@nestjs/jwt';
import { InvoicesRespository } from '@cms-invoices-repository';
import { PrismaClient } from '@prisma/client';

describe('InvoicesServiceService', () => {
  let service: InvoicesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvoicesService, InvoicesRespository, PrismaClient],
      imports:[JwtModule, PrismaClient]
    }).compile();

    service = module.get(InvoicesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
