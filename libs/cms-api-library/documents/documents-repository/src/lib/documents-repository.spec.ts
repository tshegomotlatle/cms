import { PrismaClient } from '@prisma/client';
import { DocumentsRepository } from './documents-repository';

describe('DocumentsRepository', () => {
  it('should be defined', () => {
    expect(new DocumentsRepository(new PrismaClient())).toBeDefined();
  });
});
