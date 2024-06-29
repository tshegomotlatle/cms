import { PrismaClient } from '@prisma/client';
import { CourtCaseRepository } from './court-case-repository';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { CourtCase } from '@cms-models';

describe('CourtCaseRepository', () => {
  let caseRepo: CourtCaseRepository;
  let prisma: DeepMockProxy<PrismaClient>;

  beforeEach(() => {
    prisma = mockDeep<PrismaClient>();
    caseRepo = new CourtCaseRepository(prisma);
  });

  it('should be defined', () => {
    expect(new CourtCaseRepository(new PrismaClient())).toBeDefined();
  });

  it('should add a new court case', async () => {
    const date = new Date();
    const user: CourtCase = {
      caseNumber: '123',
      status: 'open',
      type: 'trial',
      defendant: 'defendant',
      plaintiff: 'plaintiff',
      location: 'location',
      outcome: 'outcome',
      dateCreated: date,
      userId: '123',
      id: '123',
    };

    prisma.courtCase.create.mockResolvedValue({
      caseNumber: '123',
      status: 'open',
      type: 'trial',
      defendant: 'defendant',
      plaintiff: 'plaintiff',
      location: 'location',
      outcome: 'outcome',
      dateCreated: date,
      userId: '123',
      id: '123',
    });

    const result = await caseRepo.AddCase(user);
    expect(result).toEqual(user);
  });

});
