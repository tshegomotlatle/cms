import { Module } from '@nestjs/common';
import { CourtCasesServiceService } from './court-cases-service.service';

@Module({
  controllers: [],
  providers: [CourtCasesServiceService],
  exports: [CourtCasesServiceService],
})
export class CourtCasesServiceModule {}
