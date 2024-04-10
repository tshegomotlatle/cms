import { Module } from '@nestjs/common';
import { CourtCasesApiController } from './court-cases-api.controller';

@Module({
  controllers: [CourtCasesApiController],
  providers: [],
  exports: [],
})
export class CourtCasesApiModule {}
