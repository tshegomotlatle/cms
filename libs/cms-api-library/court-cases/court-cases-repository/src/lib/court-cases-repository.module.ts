import { Module } from '@nestjs/common';
import { CourtCaseRepository } from './court-case-repository';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [],
  providers: [PrismaClient, CourtCaseRepository],
  exports: [CourtCaseRepository],
})
export class CourtCasesRepositoryModule {}
