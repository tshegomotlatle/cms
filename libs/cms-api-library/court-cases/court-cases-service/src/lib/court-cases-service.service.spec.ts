import { Test } from '@nestjs/testing';
import { CourtCasesServiceService } from './court-cases-service.service';

describe('CourtCasesServiceService', () => {
  let service: CourtCasesServiceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CourtCasesServiceService],
    }).compile();

    service = module.get(CourtCasesServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
