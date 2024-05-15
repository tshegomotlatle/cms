import { PrismaClient } from '@prisma/client';
import { InvoicesRespository } from './invoices-respository';

describe('InvoicesRespositoryTs', () => {
  it('should be defined', () => {
    expect(new InvoicesRespository(new PrismaClient())).toBeDefined();
  });
});
