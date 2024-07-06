import { Module } from '@nestjs/common';
import { CourtCaseRepository, CourtCasesRepositoryModule } from '@cms-court-cases-repository';
import { AuthenticationApiModule, CurrentUserService } from '@cms-authetication-api';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [],
  providers: [CurrentUserService, CourtCaseRepository, PrismaClient],
  exports: [],
  imports: [CourtCasesRepositoryModule, AuthenticationApiModule]
})
export class CourtCasesServiceModule {}
