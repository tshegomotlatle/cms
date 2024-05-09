import { Test } from '@nestjs/testing';
import { InvoicesApiController } from './invoices-api.controller';

describe('InvoicesApiController', () => {
  let controller: InvoicesApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [InvoicesApiController],
    }).compile();

    controller = module.get(InvoicesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
