import { Test } from '@nestjs/testing';
import { CourtCasesService } from './court-cases-service.service';
import { CourtCaseRepository } from '@cms-court-cases-repository';
import { PrismaClient } from '@prisma/client';
import { JwtModule } from '@nestjs/jwt';

describe('CourtCasesServiceService', () => {
  let service: CourtCasesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CourtCasesService, CourtCaseRepository, PrismaClient, JwtModule],
      imports: [PrismaClient, JwtModule]
    }).compile();

    service = module.get(CourtCasesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
