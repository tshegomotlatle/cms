import { Module } from '@nestjs/common';
import { CourtCaseRepository, CourtCasesRepositoryModule } from '@cms-court-cases-repository';
import { AuthenticationApiModule } from '@cms-authetication-api';
import { PrismaClient } from '@prisma/client';
import { CommonFunctionsService } from '@cms-common-functions';

@Module({
  controllers: [],
  providers: [CommonFunctionsService, CourtCaseRepository, PrismaClient],
  exports: [],
  imports: [CourtCasesRepositoryModule, AuthenticationApiModule]
})
export class CourtCasesServiceModule { }
