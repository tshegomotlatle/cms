import { Test } from '@nestjs/testing';
import { InvoicesApiController } from './invoices-api.controller';
import { InvoicesService } from '@cms-invoices-service';
import { InvoicesRespository } from '@cms-invoices-repository';
import { PrismaClient } from '@prisma/client';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CurrentUserService } from '@cms-authetication-api';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { EditInvoice } from '@cms-models';


describe('InvoicesApiController', () => {
  let controller: InvoicesApiController;
  let service: InvoicesService;
  let currentUserService: DeepMockProxy<CurrentUserService>;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvoicesService, InvoicesRespository, PrismaClient, CurrentUserService, JwtService],
      controllers: [InvoicesApiController],
    }).compile();

    controller = module.get<InvoicesApiController>(InvoicesApiController);
    service = module.get<InvoicesService>(InvoicesService);
    currentUserService = mockDeep<CurrentUserService>();
  });


  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  it('should get an invoice', async () => {
    const date = new Date();
    jest.spyOn(service, 'GetInvoiceById').mockResolvedValue({
      invoiceNumber: "1234",
      name: "Tshego",
      date: date,
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    });

    const result = await controller.Get({ id: "1234" }, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual({
      invoiceNumber: "1234",
      name: "Tshego",
      date: date,
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    });
  });

  it('should get all invoices', async () => {
    const date = new Date();
    jest.spyOn(service, 'GetInvoiceByInvoiceNumber').mockResolvedValue([{
      invoiceNumber: "1234",
      name: "Tshego",
      date: date,
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    }]);

    const result = await controller.GetByInvoiceNumber({ invoiceNumber: "1234" }, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual([{
      invoiceNumber: "1234",
      name: "Tshego",
      date: date,
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    }]);
  });

  it('should add an invoice', async () => {
    const date = new Date();
    const invoice = {
      invoiceNumber: "1234",
      name: "Tshego",
      date: date,
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    };
    jest.spyOn(service, 'AddInvoice').mockResolvedValue(true);
    const result = await controller.Add(invoice, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(true);


  });

  it('should delete an invoice', async () => {
    jest.spyOn(service, 'DeleteInvoice').mockResolvedValue(true);
    const result = await controller.Delete({ id: "1234" }, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(true);
  });

  it('should edit an invoice', async () => {
    const date = new Date();
    const invoice = {
      id: "1234",
      invoiceNumber: "1234",
      name: "Tshego",
      date: date,
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    };
    jest.spyOn(service, 'EditInvoice').mockResolvedValue(true);
    const result = await controller.Edit(invoice, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(true);
  });

  it('should throw not found exception for edit', async () => {
    const invoice = {
      id: "1234",
      invoiceNumber: "1234",
      name: "Tshego",
      date: new Date(),
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    };
    jest.spyOn(service, 'EditInvoice').mockResolvedValue(new NotFoundException());
    const result = await controller.Edit(invoice, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  });

  it('should throw bad request exception for add', async () => {
    const invoice = {
      id: "1234",
      invoiceNumber: "1234",
      name: "Tshego",
      date: new Date(),
      hours: 10,
      costPerHour: 10,
      caseId: "1234",
      userId: "1234",
    };
    jest.spyOn(service, 'AddInvoice').mockResolvedValue(new BadRequestException());
    const result = await controller.Add(invoice, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(new BadRequestException());
  });

  it('should throw not found exception for delete', async () => {
    jest.spyOn(service, 'DeleteInvoice').mockResolvedValue(new NotFoundException());
    const result = await controller.Delete({ id: "1234" }, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  });

  it('should throw not found exception for get', async () => {
    jest.spyOn(service, 'GetInvoiceByInvoiceNumber').mockResolvedValue(new NotFoundException());
    const result = await controller.GetByInvoiceNumber({ invoiceNumber: "1234" }, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  });

  it('should throw not found exception for get all', async () => {
    jest.spyOn(service, 'GetInvoiceByInvoiceNumber').mockResolvedValue(new NotFoundException());
    const result = await controller.GetByInvoiceNumber({ invoiceNumber: "1234" }, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  });

  it('should throw not found exception edit', async () => {
    const editInvoice: EditInvoice = {
      id: "1234",
      invoiceNumber: "1234",
      name: "Tshego",
      date: new Date(),
      hours: 10,
      costPerHour: 10,
    }
    jest.spyOn(service, 'EditInvoice').mockResolvedValue(new NotFoundException());
    const result = await controller.Edit(editInvoice, { authorization: "1234" });
    expect(result).toBeDefined();
    expect(result).toEqual(new NotFoundException());
  });
});
