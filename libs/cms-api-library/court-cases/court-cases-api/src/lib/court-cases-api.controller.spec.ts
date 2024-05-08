import { Test } from '@nestjs/testing';
import { CourtCasesApiController } from './court-cases-api.controller';
import { CourtCasesService } from '@cms-court-cases-service';
import { CourtCaseRepository } from '@cms-court-cases-repository';
import { Prisma, PrismaClient } from '@prisma/client';

describe('CourtCasesApiController', () => {
  let controller: CourtCasesApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CourtCasesService, CourtCaseRepository, PrismaClient],
      controllers: [CourtCasesApiController],
      imports: [PrismaClient]
    }).compile();

    controller = module.get(CourtCasesApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
