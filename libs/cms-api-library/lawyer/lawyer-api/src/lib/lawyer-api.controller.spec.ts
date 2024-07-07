import { Test } from '@nestjs/testing';
import { LawyerApiController } from './lawyer-api.controller';
import { LawyerService } from '@cms/lawyer-service';
import { LawyerRepository } from '@cms/lawyer-repository';
import { PrismaClient } from '@prisma/client';
import { EmailRequest, IdRequest, Lawyer, AddLawyerRequest, UpdateLawyerRequest } from '@cms-models';
import { BadRequestException, NotFoundException } from '@nestjs/common';

describe('LawyerApiController', () => {
  let controller: LawyerApiController;
  let service: LawyerService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LawyerService, LawyerRepository, PrismaClient],
      controllers: [LawyerApiController],
    }).compile();

    controller = module.get<LawyerApiController>(LawyerApiController);
    service = module.get<LawyerService>(LawyerService);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  it('should get all lawyers', async () => {
    jest.spyOn(service, 'GetAllLawyers').mockResolvedValue([{
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }]);

    const result = await controller.GetAllLawyers();
    
    expect(result).toBeDefined();
    expect(result).toEqual([{
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }]);
  });

  it('should throw not found exception for get all', async () => {
    jest.spyOn(service, 'GetAllLawyers').mockResolvedValue(new NotFoundException());

    const result = await controller.GetAllLawyers();

    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  });

  it('should get a lawyer based on id', async () => {
    jest.spyOn(service, 'GetLawyerById').mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const idRequest : IdRequest = {
      id: "1234"
    }

    const result = await controller.GetLawyerById(idRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  })

  it('should throw not found exception for get by id', async () => {
    jest.spyOn(service, 'GetLawyerById').mockResolvedValue(new NotFoundException());

    const idRequest : IdRequest = {
      id: "1234"
    }

    const result = await controller.GetLawyerById(idRequest);

    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  })

  it('should get a lawyer based on email', async () => {
    jest.spyOn(service, 'GetLawyerByEmail').mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });


    const emailRequest: EmailRequest = {
      email: "tshegomotlatle.dev@gmail.com"
    }

    const result = await controller.GetLawyerByEmail(emailRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  });

  it('should throw not found exception for get by email', async () => {
    jest.spyOn(service, 'GetLawyerByEmail').mockResolvedValue(new NotFoundException());

    const emailRequest: EmailRequest = {
      email: "tshegomotlatle.dev@gmail.com"
    }

    const result = await controller.GetLawyerByEmail(emailRequest);

    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  })

  it('should edit a lawyer', async () => {
    const lawyerEditRequest: UpdateLawyerRequest = {
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }
    
    jest.spyOn(service, 'UpdateLawyer').mockResolvedValue(true);

    const result = await controller.UpdateLawyer(lawyerEditRequest);
    
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  it('should throw not found exception for edit', async () => {
    const lawyerEditRequest: UpdateLawyerRequest = {
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }
    
    jest.spyOn(service, 'UpdateLawyer').mockResolvedValue(new NotFoundException());

    const result = await controller.UpdateLawyer(lawyerEditRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  })

  it('should delete a lawyer', async () => {
    jest.spyOn(service, 'DeleteLawyer').mockResolvedValue(true);


    const idRequest: IdRequest = {
      id: "1234"
    }

    const result = await controller.DeleteLawyer(idRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual(true);

  });

  it('should throw not found exception for delete', async () => {
    jest.spyOn(service, 'DeleteLawyer').mockResolvedValue(new NotFoundException());

    const idRequest: IdRequest = {
      id: "1234"
    }

    const result = await controller.DeleteLawyer(idRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  })


  it('should add a lawyer', async () => {
    const lawyerAddRequest: AddLawyerRequest = {
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }
    
    jest.spyOn(service, 'AddLawyer').mockResolvedValue(true)

    const result = await controller.AddLawyer(lawyerAddRequest);
    
    expect(result).toBeDefined();
    expect(result).toBeTruthy();
  });

  it('should throw bad request exception for add', async () => {
    const lawyerAddRequest: AddLawyerRequest = {
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }
    
    jest.spyOn(service, 'AddLawyer').mockResolvedValue(new BadRequestException());

    const result = await controller.AddLawyer(lawyerAddRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual(new BadRequestException());
  })
});
