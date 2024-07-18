import { Test } from '@nestjs/testing';
import { CommonFunctionsService } from './common-functions.service';

describe('CommonFunctionsService', () => {
  let service: CommonFunctionsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CommonFunctionsService],
    }).compile();

    service = module.get(CommonFunctionsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
