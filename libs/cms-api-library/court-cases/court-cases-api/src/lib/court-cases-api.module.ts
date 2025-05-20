import { Module } from '@nestjs/common';
import { CourtCasesApiController } from './court-cases-api.controller';
import { CourtCasesService, CourtCasesServiceModule } from '@cms-court-cases-service';
import { CourtCaseRepository, CourtCasesRepositoryModule } from '@cms-court-cases-repository';
import { AuthenticationApiModule } from '@cms-authetication-api';
import { PrismaClient } from '@prisma/client';
import { CommonFunctionsService } from '@cms-common-functions';

@Module({
  controllers: [CourtCasesApiController],
  providers: [CourtCasesService, CommonFunctionsService, CourtCaseRepository, PrismaClient],
  exports: [],
  imports: [CourtCasesServiceModule, CourtCasesRepositoryModule, AuthenticationApiModule, ]
})
export class CourtCasesApiModule { }

