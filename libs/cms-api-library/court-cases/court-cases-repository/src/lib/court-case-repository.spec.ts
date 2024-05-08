import { PrismaClient } from '@prisma/client';
import { CourtCaseRepository } from './court-case-repository';

describe('CourtCaseRepository', () => {
  it('should be defined', () => {
    expect(new CourtCaseRepository(new PrismaClient())).toBeDefined();
  });
});
