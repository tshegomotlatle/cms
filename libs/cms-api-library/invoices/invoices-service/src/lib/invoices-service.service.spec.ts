import { InvoicesRespository } from '@cms-invoices-repository';
import { PrismaClient } from '@prisma/client';
import { DeepMockProxy, mockDeep } from 'jest-mock-extended';
import { InvoicesService } from './invoices-service.service';
import { CurrentUserService } from '@cms-authetication-api';


describe('InvoicesServiceService', () => {
  let invoiceService: InvoicesService;
  let invoiceRepositoryMock: DeepMockProxy<InvoicesRespository>;
  let prisma: DeepMockProxy<PrismaClient>;
  let currentUserService: DeepMockProxy<CurrentUserService>;

  beforeEach(async () => {
    invoiceRepositoryMock = mockDeep<InvoicesRespository>();
    prisma = mockDeep<PrismaClient>();
    currentUserService = mockDeep<CurrentUserService>();

    invoiceService = new InvoicesService(invoiceRepositoryMock, currentUserService);
    currentUserService.GetUserToken.mockReturnValue({
      userId: '123456',
      email: 'test',
    });
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
