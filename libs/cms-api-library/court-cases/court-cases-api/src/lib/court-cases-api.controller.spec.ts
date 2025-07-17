import { CommonFunctionsService } from '@cms-common-functions';
import { CourtCaseRepository } from '@cms-court-cases-repository';
import { CourtCasesService } from '@cms-court-cases-service';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { CourtCasesApiController } from './court-cases-api.controller';

import { JwtService } from '@nestjs/jwt';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';

describe('CourtCasesApiController', () => {
  let controller: CourtCasesApiController;
  let service: CourtCasesService;
  let currentUserService: DeepMockProxy<CommonFunctionsService>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CourtCasesService, CourtCaseRepository, PrismaClient, CommonFunctionsService, JwtService],
      controllers: [CourtCasesApiController],
    }).compile();

    controller = module.get<CourtCasesApiController>(CourtCasesApiController);
    service = module.get<CourtCasesService>(CourtCasesService);
    currentUserService = mockDeep<CommonFunctionsService>();
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  it('should get all court cases', async () => {
    const date = new Date();
    jest.spyOn(service, 'GetAllCases').mockResolvedValue([{
      id: "1234",
      caseNumber: "1234",
      dateCreated: date,
      defendant: "Tshego",
      location: "Motlatle",
      plaintiff: "Tshego",
      status: "Pending",
      type: "Trial",
      outcome: "Pending",
    }]);

    const result = await controller.GetAllCases({}, { authorization: "1234" });

    currentUserService.GetUserToken.mockReturnValue({
      userId: '123456',
      email: 'test',
    })

    expect(result).toEqual([{
      id: "1234",
      caseNumber: "1234",
      dateCreated: date,
      defendant: "Tshego",
      location: "Motlatle",
      plaintiff: "Tshego",
      status: "Pending",
      type: "Trial",
      outcome: "Pending",
    }]);
  });

  it('should return not found when no court cases exist', async () => {
    jest.spyOn(service, 'GetAllCases').mockResolvedValue(new NotFoundException());
    const result = await controller.GetAllCases({}, { authorization: "1234" });
    expect(result).toEqual(new NotFoundException());
  });

  it('should get a court case by id', async () => {
    const date = new Date();
    jest.spyOn(service, 'GetCaseById').mockResolvedValue({
      id: "1234",
      caseNumber: "1234",
      dateCreated: date,
      defendant: "Tshego",
      location: "Motlatle",
      plaintiff: "Tshego",
      status: "Pending",
      type: "Trial",
      outcome: "Pending",
    });

    const result = await controller.GetCaseById({}, { id: "1234" }, { authorization: "1234" });
    expect(result).toEqual({
      id: "1234",
      caseNumber: "1234",
      dateCreated: date,
      defendant: "Tshego",
      location: "Motlatle",
      plaintiff: "Tshego",
      status: "Pending",
      type: "Trial",
      outcome: "Pending",
    });
  });

  it('should return not found when no court case exists', async () => {
    jest.spyOn(service, 'GetCaseById').mockResolvedValue(new NotFoundException());
    const result = await controller.GetCaseById({},{ id: "1234" }, { authorization: "1234" });
    expect(result).toEqual(new NotFoundException());
  });

  it('should add a court case', async () => {
    const date = new Date();
    jest.spyOn(service, 'AddCase').mockResolvedValue(true);
    const result = await controller.Add(
      {
        caseNumber: "1234",
        dateCreated: date,
        defendant: "Tshego",
        location: "Motlatle",
        plaintiff: "Tshego",
        status: "Pending",
        type: "Trial",
        outcome: "Pending",
      },
      { authorization: "1234" });

    expect(result).toBeTruthy()
  });

  it('should return bad request when adding a court case', async () => {
    const date = new Date();
    jest.spyOn(service, 'AddCase').mockResolvedValue(new BadRequestException());
    const result = await controller.Add(
      {
        caseNumber: "1234",
        dateCreated: date,
        defendant: "Tshego",
        location: "Motlatle",
        plaintiff: "Tshego",
        status: "Pending",
        type: "Trial",
        outcome: "Pending",
      },
      { authorization: "1234" });
    expect(result).toEqual(new BadRequestException());
  });

  it('should edit a court case', async () => {
    const date = new Date();
    jest.spyOn(service, 'EditCase').mockResolvedValue(true);
    const result = await controller.Edit(
      {
        id: "1234",
        caseNumber: "1234",
        dateCreated: date,
        defendant: "Tshego",
        location: "Motlatle",
        plaintiff: "Tshego",
        status: "Pending",
        type: "Trial",
        outcome: "Pending",
      },
      { authorization: "1234" });

    expect(result).toBeTruthy()
  });

  it('should return bad request when editing a court case', async () => {
    const date = new Date();
    jest.spyOn(service, 'EditCase').mockResolvedValue(new BadRequestException());
    const result = await controller.Edit(
      {
        id: "1234",
        caseNumber: "1234",
        dateCreated: date,
        defendant: "Tshego",
        location: "Motlatle",
        plaintiff: "Tshego",
        status: "Pending",
        type: "Trial",
        outcome: "Pending",
      },
      { authorization: "1234" });
    expect(result).toEqual(new BadRequestException());
  });

  it('should delete a court case', async () => {
    jest.spyOn(service, 'DeleteCase').mockResolvedValue(true);
    const result = await controller.Delete(
      {
        caseNumber: "1234",
      },
      { authorization: "1234" });
    expect(result).toBeTruthy()
  });

  it('should return bad request when deleting a court case', async () => {
    jest.spyOn(service, 'DeleteCase').mockResolvedValue(new BadRequestException());
    const result = await controller.Delete(
      {
        caseNumber: "1234",
      },
      { authorization: "1234" });
    expect(result).toEqual(new BadRequestException());
  });

  it('should get court case by caseNumber', async () => {
    const date = new Date();
    jest.spyOn(service, 'GetByCaseNumber').mockResolvedValue({
      id: "1234",
      caseNumber: "1234",
      dateCreated: date,
      defendant: "Tshego",
      location: "Motlatle",
      plaintiff: "Tshego",
      status: "Pending",
      type: "Trial",
      outcome: "Pending",
    });

    const result = await controller.GetCaseByCaseNumber({ caseNumber: "1234" }, { authorization: "1234" });
    expect(result).toEqual({
      id: "1234",
      caseNumber: "1234",
      dateCreated: date,
      defendant: "Tshego",
      location: "Motlatle",
      plaintiff: "Tshego",
      status: "Pending",
      type: "Trial",
      outcome: "Pending",
    });
  });

  it('should return not found when no court case exists', async () => {
    jest.spyOn(service, 'GetByCaseNumber').mockResolvedValue(new NotFoundException());
    const result = await controller.GetCaseByCaseNumber({ caseNumber: "1234" }, { authorization: "1234" });
    expect(result).toEqual(new NotFoundException());
  });

  it('should get all caseNumbers', async () => {
    const date = new Date();
    jest.spyOn(service, 'GetAllCaseNumbers').mockResolvedValue({
      caseNumbers: ["1234"],
    });

    const result = await controller.GetAllCaseNumbers({ authorization: "1234" });
    expect(result).toEqual({
      caseNumbers: ["1234"],
    });
  })
});
