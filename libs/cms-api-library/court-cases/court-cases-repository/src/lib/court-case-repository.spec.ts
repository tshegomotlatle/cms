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

  it('should edit a court case', async () => {
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

    prisma.courtCase.update.mockResolvedValue({
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

    const result = await caseRepo.EditCase(user);
    expect(result).toEqual(user);
  });

  it('should get a court case by id', async () => {
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

    prisma.courtCase.findUnique.mockResolvedValue({
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

    const result = await caseRepo.GetCaseById('123', '123');
    expect(result).toEqual(user);
  });

  it('should get all court cases', async () => {
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

    prisma.courtCase.findMany.mockResolvedValue([
      {
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
      },
    ]);

    const result = await caseRepo.GetAllCases('123');
    expect(result).toEqual([user]);
  });

  it('should delete a court case', async () => {
    prisma.courtCase.delete.mockResolvedValue({
      caseNumber: '123',
      status: 'open',
      type: 'trial',
      defendant: 'defendant',
      plaintiff: 'plaintiff',
      location: 'location',
      outcome: 'outcome',
      dateCreated: new Date(),
      userId: '123',
      id: '123',
    });

    const result = await caseRepo.DeleteCase('123', '123');
    expect(result).toEqual({
      caseNumber: '123',
      status: 'open',
      type: 'trial',
      defendant: 'defendant',
      plaintiff: 'plaintiff',
      location: 'location',
      outcome: 'outcome',
      dateCreated: new Date(),
      userId: '123',
      id: '123',
    });
  });

  it('should get all court cases by case number', async () => {
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

    prisma.courtCase.findUnique.mockResolvedValue({
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

    const result = await caseRepo.GetAllCasesByCaseNumber('123', '123');
    expect(result).toEqual(user);
  });

});
