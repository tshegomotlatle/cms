import { Module } from '@nestjs/common';
import { CourtCaseRepository } from './court-case-repository';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [],
  providers: [PrismaClient],
  exports: [],
})
export class CourtCasesRepositoryModule {}
