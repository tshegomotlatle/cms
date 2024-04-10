import { Test } from '@nestjs/testing';
import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ServiceService],
    }).compile();

    service = module.get(ServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
