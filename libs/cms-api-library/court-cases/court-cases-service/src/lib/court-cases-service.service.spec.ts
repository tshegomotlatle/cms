import { CurrentUserService } from '@cms-authetication-api';
import { CourtCaseRepository } from '@cms-court-cases-repository';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { CourtCasesService } from './court-cases-service.service';


describe('CourtCasesServiceService', () => {
  let courtCaseService: CourtCasesService;
  let courtCaseRepositoryMock: DeepMockProxy<CourtCaseRepository>;
  let prisma: DeepMockProxy<PrismaClient>;
  let currentUserService: DeepMockProxy<CurrentUserService>;

  beforeEach(async () => {
    courtCaseRepositoryMock = mockDeep<CourtCaseRepository>();
    prisma = mockDeep<PrismaClient>();
    currentUserService = mockDeep<CurrentUserService>();

    courtCaseService = new CourtCasesService(courtCaseRepositoryMock, currentUserService);
    currentUserService.GetUserToken.mockReturnValue({
      userId: '123456',
      email: 'test',
    });
  });


  it('should be defined', () => {
    expect(courtCaseService).toBeTruthy();
  });

  it('should add a new court case', async () => {

    courtCaseRepositoryMock.AddCase.mockResolvedValue({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: new Date(),
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    });

    const result = await courtCaseService.AddCase({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: new Date(),
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    }, "123456");

    expect(result).toBeTruthy();

  });

  it('should return bad request when adding a new court case', async () => {

    courtCaseRepositoryMock.AddCase.mockResolvedValue(null);

    const result = await courtCaseService.AddCase({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: new Date(),
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    }, "123456");

    expect(result).toEqual(new BadRequestException());
  });

  it('should get all court cases', async () => {

    const date = new Date();
    courtCaseRepositoryMock.GetAllCases.mockResolvedValue([
      {
        caseNumber: '123456',
        userId: '123456',
        dateCreated: date,
        id: '123456',
        status: 'open',
        type: 'trial',
        plaintiff: 'test',
        defendant: 'test',
        location: 'test',
        outcome: 'test',
      },
    ]);
    const result = await courtCaseService.GetAllCases("123456");
    expect(result).toEqual([
      {
        caseNumber: '123456',
        userId: '123456',
        dateCreated: date,
        id: '123456',
        status: 'open',
        type: 'trial',
        plaintiff: 'test',
        defendant: 'test',
        location: 'test',
        outcome: 'test',
      },
    ]);
  });

  it('should return not found when getting all court cases', async () => {
    courtCaseRepositoryMock.GetAllCases.mockResolvedValue([]);

    const result = await courtCaseService.GetAllCases("123456");
    expect(result).toEqual([]);
  });

  it('should get a court case by id', async () => {
    const date = new Date();
    courtCaseRepositoryMock.GetCaseById.mockResolvedValue({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: date,
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    });
    const result = await courtCaseService.GetCaseById('123456', '123456');
    expect(result).toEqual({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: date,
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    });
  });

  it('should return not found when getting a court case by id', async () => {
    courtCaseRepositoryMock.GetCaseById.mockResolvedValue(null);
    const result = await courtCaseService.GetCaseById('123456', '123456');
    expect(result).toEqual(new NotFoundException());
  });

  it('should edit a court case', async () => {
    const date = new Date();
    courtCaseRepositoryMock.EditCase.mockResolvedValue({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: date,
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    });
    const result = await courtCaseService.EditCase({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: date,
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    }, "123456");

    expect(result).toBeTruthy()
  });

  it('should return bad request when editing a court case', async () => {
    courtCaseRepositoryMock.EditCase.mockResolvedValue(null);
    const result = await courtCaseService.EditCase({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: new Date(),
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    }, "123456");
    expect(result).toEqual(new BadRequestException());
  });

  it('should delete a court case', async () => {
    const date = new Date();
    courtCaseRepositoryMock.DeleteCase.mockResolvedValue({
      caseNumber: '123456',
      userId: '123456',
      dateCreated: date,
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    });
    const result = await courtCaseService.DeleteCase('123456', '123456');
    expect(result).toBeTruthy();
  });

  it('should return bad request when deleting a court case', async () => {
    courtCaseRepositoryMock.DeleteCase.mockResolvedValue(null);
    const result = await courtCaseService.DeleteCase('123456', '123456');
    expect(result).toEqual(new NotFoundException());
  });

  it('should get a court case by case number', async () => {
    const date = new Date()
    courtCaseRepositoryMock.GetAllCases.mockResolvedValue([{
      caseNumber: '123456',
      userId: '123456',
      dateCreated: date,
      id: '123456',
      status: 'open',
      type: 'trial',
      plaintiff: 'test',
      defendant: 'test',
      location: 'test',
      outcome: 'test',
    }]);

    const result = await courtCaseService.GetAllCaseNumbers('123456');
    expect(result).toEqual({
      caseNumbers: ['123456'],
    });
  });

  it('should return not found when getting a court case by case number', async () => {
    courtCaseRepositoryMock.GetAllCases.mockResolvedValue([]);
    const result = await courtCaseService.GetAllCaseNumbers('123456');
    expect(result).toEqual({
      caseNumbers: [],
    });
  });

});
