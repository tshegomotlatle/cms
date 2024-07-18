import { PrismaClient } from '@prisma/client';
import { InvoicesRespository } from './invoices-respository';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';


describe('InvoicesRespositoryTs', () => {
  let invoiceRepo: InvoicesRespository;
  let prisma: DeepMockProxy<PrismaClient>;


  beforeEach(() => {
    prisma = mockDeep<PrismaClient>();
    invoiceRepo = new InvoicesRespository(prisma);
  });

  it('should be defined', () => {
    expect(invoiceRepo).toBeDefined();
  });

  it('should add an invoice', async () => {
    const date = new Date();
    prisma.invoiceItem.create.mockResolvedValue({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });

    const result = await invoiceRepo.AddInvoice({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
    }, "test");

    expect(result).toEqual({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });
  });

  it('should edit an invoice', async () => {
    const date = new Date();
    prisma.invoiceItem.update.mockResolvedValue({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });

    const result = await invoiceRepo.EditInvoice({
      id: "test",
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      costPerHour: 100,
    }, "test");

    expect(result).toEqual({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });
  });

  it('should delete an invoice', async () => {
    const date = new Date();
    prisma.invoiceItem.delete.mockResolvedValue({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });

    const result = await invoiceRepo.DeleteInvoice("test", "test");

    expect(result).toEqual({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });
  });

  it('should get an invoice', async () => {
    const date = new Date();
    prisma.invoiceItem.findUnique.mockResolvedValue({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });

    const result = await invoiceRepo.GetInvoiceById("test", "test");

    expect(result).toEqual({
      invoiceNumber: "test",
      date: date,
      hours: 100,
      name: "test",
      caseId: "test",
      costPerHour: 100,
      userId: "test",
      id: "test"
    });
  });

  it('should get invoices by invoice number', async () => {
    const date = new Date();
    prisma.invoiceItem.findMany.mockResolvedValue([
      {
        invoiceNumber: "test",
        date: date,
        hours: 100,
        name: "test",
        caseId: "test",
        costPerHour: 100,
        userId: "test",
        id: "test"
      }
    ]);

    const result = await invoiceRepo.GetInvoiceByInvoiceNumber("test", "test");

    expect(result).toEqual([
      {
        invoiceNumber: "test",
        date: date,
        hours: 100,
        name: "test",
        caseId: "test",
        costPerHour: 100,
        userId: "test",
        id: "test"
      }
    ]);
  });
});
