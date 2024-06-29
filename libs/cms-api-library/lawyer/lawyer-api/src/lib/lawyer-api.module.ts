import { Module } from '@nestjs/common';
import { LawyerApiController } from './lawyer-api.controller';

@Module({
  controllers: [LawyerApiController],
  providers: [],
  exports: [],
})
export class LawyerApiModule {}
