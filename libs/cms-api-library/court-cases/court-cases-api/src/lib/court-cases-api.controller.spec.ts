import { Test } from '@nestjs/testing';
import { CourtCasesApiController } from './court-cases-api.controller';

describe('CourtCasesApiController', () => {
  let controller: CourtCasesApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [CourtCasesApiController],
    }).compile();

    controller = module.get(CourtCasesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
