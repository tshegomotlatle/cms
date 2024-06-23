import { Test } from '@nestjs/testing';
import { CommonService } from './common.service';

describe('CommonService', () => {
  let service: CommonService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CommonService],
    }).compile();

    service = module.get(CommonService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
