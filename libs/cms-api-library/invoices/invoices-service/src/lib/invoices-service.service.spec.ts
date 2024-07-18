import { InvoicesRespository } from '@cms-invoices-repository';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { InvoicesService } from './invoices-service.service';
import { CommonFunctionsService } from '@cms-common-functions';
import { BadRequestException, NotFoundException } from '@nestjs/common';


describe('InvoicesServiceService', () => {
  let invoiceService: InvoicesService;
  let invoiceRepositoryMock: DeepMockProxy<InvoicesRespository>;
  let prisma: DeepMockProxy<PrismaClient>;
  let currentUserService: DeepMockProxy<CommonFunctionsService>;

  beforeEach(async () => {
    invoiceRepositoryMock = mockDeep<InvoicesRespository>();
    prisma = mockDeep<PrismaClient>();
    currentUserService = mockDeep<CommonFunctionsService>();

    invoiceService = new InvoicesService(invoiceRepositoryMock, currentUserService);
    currentUserService.GetUserToken.mockReturnValue({
      userId: '123456',
      email: 'test',
    });
  });

  it('should be defined', () => {
    expect(invoiceService).toBeTruthy();
  });

  it('should add invoice', async () => {

    invoiceRepositoryMock.AddInvoice.mockResolvedValue({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    });

    const result = await invoiceService.AddInvoice({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    }, '123456');

    expect(result).toBeDefined();
    expect(result).toEqual(true);
  });

  it("should throw bad request exception for add if user found", async () => {

    invoiceRepositoryMock.GetInvoiceById.mockResolvedValue(null);

    const result = await invoiceService.AddInvoice({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    }, '123456');

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(BadRequestException);
  });

  it("should throw bad request exception for add", async () => {
    invoiceRepositoryMock.AddInvoice.mockResolvedValue(null);

    const result = await invoiceService.AddInvoice({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    }, '123456');

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(BadRequestException);
  });

  it('should edit invoice', async () => {
    invoiceRepositoryMock.EditInvoice.mockResolvedValue({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    });

    const result = await invoiceService.EditInvoice({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      costPerHour: 100,
      id: '123456',
    }, '123456');

    expect(result).toBeDefined();
    expect(result).toEqual(true);
  });

  it("should throw bad request exception for edit", async () => {
    invoiceRepositoryMock.EditInvoice.mockResolvedValue(null);

    const result = await invoiceService.EditInvoice({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      costPerHour: 100,
      id: '123456',
    }, '123456');

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(BadRequestException);
  });

  it('should get invoice by id', async () => {
    const date = new Date();
    invoiceRepositoryMock.GetInvoiceById.mockResolvedValue({
      invoiceNumber: 'test',
      date: date,
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    });

    const result = await invoiceService.GetInvoiceById('123456', '123456');

    expect(result).toBeDefined();
    expect(result).toEqual({
      invoiceNumber: 'test',
      date: date,
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    });
  });

  it("should throw Not Found exception for get invoice by id", async () => {
    invoiceRepositoryMock.GetInvoiceById.mockResolvedValue(null);

    const result = await invoiceService.GetInvoiceById('123456', '123456');

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(NotFoundException);
  });

  it('should get invoice by invoice number', async () => {
    const date = new Date();
    invoiceRepositoryMock.GetInvoiceByInvoiceNumber.mockResolvedValue([{
      date: date,
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
      invoiceNumber: 'test',
    }]);

    const result = await invoiceService.GetInvoiceByInvoiceNumber('test', '123456');

    expect(result).toBeDefined();
    expect(result).toEqual([{
      invoiceNumber: 'test',
      date: date,
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    }]);
  });

  it("should throw Not Found exception for get invoice by invoice number", async () => {
    invoiceRepositoryMock.GetInvoiceByInvoiceNumber.mockResolvedValue(null);

    const result = await invoiceService.GetInvoiceByInvoiceNumber('test', '123456');

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(NotFoundException);
  });

  it('should delete invoice', async () => {
    invoiceRepositoryMock.DeleteInvoice.mockResolvedValue({
      invoiceNumber: 'test',
      date: new Date(),
      hours: 100,
      name: 'test',
      caseId: '123456',
      costPerHour: 100,
      userId: '123456',
    });

    const result = await invoiceService.DeleteInvoice('123456', '123456');

    expect(result).toBeDefined();
    expect(result).toEqual(true);
  });

  it("should throw bad request exception for delete", async () => {
    invoiceRepositoryMock.DeleteInvoice.mockResolvedValue(null);

    const result = await invoiceService.DeleteInvoice('123456', '123456');

    expect(result).toBeDefined();
    expect(result).toBeInstanceOf(BadRequestException);
  });


});
