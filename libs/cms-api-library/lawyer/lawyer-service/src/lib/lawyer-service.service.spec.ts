import { Test } from '@nestjs/testing';
import { LawyerService } from './lawyer-service.service';
import { LawyerRepository } from '@cms/lawyer-repository';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClient } from '@prisma/client';
import { Lawyer, UpdateLawyerRequest } from '@cms-models';
import { BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';


describe('LawyerServiceService', () => {
  let lawyerService: LawyerService;
  let LawyerRepository: DeepMockProxy<LawyerRepository>;
  let prisma: DeepMockProxy<PrismaClient>;


  beforeEach(async () => {
    LawyerRepository = mockDeep<LawyerRepository>();
    prisma = mockDeep<PrismaClient>();


    lawyerService = new LawyerService(LawyerRepository);
  });

  it('should be defined', () => {
    expect(lawyerService).toBeTruthy();
  });

  it('should get all lawyers', async () => {
    LawyerRepository.GetAllLawyers.mockResolvedValue([
      {
        id: "1234",
        name: "Tshego",
        surname: "Motlatle",
        email: "tshegomotlatle.dev@gmail.com",
        mobileNumber: "0812198232",
      },
    ]);

    const result = await lawyerService.GetAllLawyers();
    expect(result).toBeDefined();
    expect(result).toEqual([
      {
        id: "1234",
        name: "Tshego",
        surname: "Motlatle",
        email: "tshegomotlatle.dev@gmail.com",
        mobileNumber: "0812198232",
      },
    ]);
  });

  it('should return a not found exception when trying to getting all lawyers', async () => {
    LawyerRepository.GetLawyerById.mockResolvedValue(null);
    const result = await lawyerService.GetAllLawyers();
    expect(result).toEqual(new NotFoundException());
  });

  it('should get a lawyer by email', async () => {
    LawyerRepository.GetLawyerByEmail.mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const result = await lawyerService.GetLawyerByEmail("tshegomotlatle.dev@gmail.com");
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  });

  it('should return a not found exception when trying to get a lawyer by email', async () => {
    LawyerRepository.GetLawyerByEmail.mockResolvedValue(null);
    const result = await lawyerService.GetLawyerByEmail("tshegomotlatle.dev@gmail.com");
    expect(result).toEqual(new NotFoundException());
  });

  it('should register a lawyer', async () => {
    const lawyerRegisterRequest: Lawyer = {
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
    }

    LawyerRepository.AddLawyer.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
    });

    const lawyer = await lawyerService.AddLawyer(lawyerRegisterRequest);
    expect(lawyer).toBeDefined();
    expect(lawyer).toBeTruthy();
  });
  

  it('should return a conflict exception when trying to register a lawyer', async () => {
    const lawyerRegisterRequest: Lawyer = {
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
    }

    LawyerRepository.GetLawyerByEmail.mockResolvedValue({
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      name: "Tshego",
      surname: "Motlatle",
      mobileNumber: "0812198232",
    });

    const result = await lawyerService.AddLawyer(lawyerRegisterRequest);
    expect(result).toEqual(new ConflictException());
  });

  it('should get a user based on id', async () => {
    LawyerRepository.GetLawyerById.mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const result = await lawyerService.GetLawyerById("1234");
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  });

  it('should return a not found exception when trying to get a user based on id', async () => {
    LawyerRepository.GetLawyerById.mockResolvedValue(null);
    const result = await lawyerService.GetLawyerById("1234");
    expect(result).toEqual(new NotFoundException());
  });

  it('should update a lawyer', async () => {
    LawyerRepository.UpdateLawyer.mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const editLawyerRequest: UpdateLawyerRequest = {
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
    }

    const lawyer = await lawyerService.UpdateLawyer(editLawyerRequest);
    expect(lawyer).toBeDefined();
    expect(lawyer).toBeTruthy();
  });

  it('should return a bad request exception when trying to update a lawyer', async () => {
    const editLawyerRequest: UpdateLawyerRequest = {
      id: "1234",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
      name: "Tshego",
      surname: "Motlatle",
    }

    LawyerRepository.GetLawyerById.mockResolvedValue(null);
    const result = await lawyerService.UpdateLawyer(editLawyerRequest);
    expect(result).toEqual(new NotFoundException());
  });

  it('should delete a lawyer', async () => {
    LawyerRepository.DeleteLawyer.mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    })
    const lawyer = await lawyerService.DeleteLawyer("1234");
    expect(lawyer).toBeDefined();
    expect(lawyer).toBeTruthy();
  });

  it('should return a not found exception when trying to delete a lawyer', async () => {
    LawyerRepository.GetLawyerById.mockResolvedValue(null);
    const result = await lawyerService.DeleteLawyer("1234");
    expect(result).toEqual(new NotFoundException());
  });
});
