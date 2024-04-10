import { Module } from '@nestjs/common';
import { CourtCasesApiController } from './court-cases-api.controller';
import { CourtCasesService, CourtCasesServiceModule } from '@cms-court-cases-service';
import { CourtCasesRepositoryModule } from '@cms-court-cases-repository';

@Module({
  controllers: [CourtCasesApiController],
  providers: [CourtCasesService],
  exports: [],
  imports: [CourtCasesServiceModule, CourtCasesRepositoryModule]
})
export class CourtCasesApiModule {}
