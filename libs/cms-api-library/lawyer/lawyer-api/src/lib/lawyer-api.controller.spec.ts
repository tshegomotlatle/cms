import { Test } from '@nestjs/testing';
import { LawyerApiController } from './lawyer-api.controller';
import { LawyerService } from '@cms/lawyer-service';
import { LawyerRepository } from '@cms/lawyer-repository';
import { PrismaClient } from '@prisma/client';
import { Lawyer } from '@cms-models';

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

  it('should get a lawyer based on id', async () => {
    jest.spyOn(service, 'GetLawyerById').mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const result = await controller.GetLawyerById({id:"1234"});
    
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  })

  it('should get a lawyer based on email', async () => {
    jest.spyOn(service, 'GetLawyerByEmail').mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const result = await controller.GetLawyerByEmail({email: "tshegomotlatle.dev@gmail.com"});
    
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  });

  it('should edit a lawyer', async () => {
    const lawyerEditRequest: Lawyer = {
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }
    
    jest.spyOn(service, 'UpdateLawyer').mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const result = await controller.UpdateLawyer(lawyerEditRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  });

  it('should delete a lawyer', async () => {
    jest.spyOn(service, 'DeleteLawyer').mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

    const result = await controller.DeleteLawyer({id: "1234"});
    
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });

  });


  it('should add a lawyer', async () => {
    const lawyerAddRequest: Lawyer = {
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    }
    
    jest.spyOn(service, 'AddLawyer').mockResolvedValue({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    })

    const result = await controller.AddLawyer(lawyerAddRequest);
    
    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "1234",
      name: "Tshego",
      surname: "Motlatle",
      email: "tshegomotlatle.dev@gmail.com",
      mobileNumber: "0812198232",
    });
  });
});
