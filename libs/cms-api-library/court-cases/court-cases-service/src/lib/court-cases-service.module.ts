import { Module } from '@nestjs/common';
import { CourtCaseRepository, CourtCasesRepositoryModule } from '@cms-court-cases-repository';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [CourtCasesRepositoryModule]
})
export class CourtCasesServiceModule {}
