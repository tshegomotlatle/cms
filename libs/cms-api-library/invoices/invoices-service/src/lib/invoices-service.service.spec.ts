import { Test } from '@nestjs/testing';
import { InvoicesService } from './invoices-service.service';

describe('InvoicesServiceService', () => {
  let service: InvoicesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvoicesService],
    }).compile();

    service = module.get(InvoicesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
