import { Test } from '@nestjs/testing';
import { InvoicesServiceService } from './invoices-service.service';

describe('InvoicesServiceService', () => {
  let service: InvoicesServiceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [InvoicesServiceService],
    }).compile();

    service = module.get(InvoicesServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
