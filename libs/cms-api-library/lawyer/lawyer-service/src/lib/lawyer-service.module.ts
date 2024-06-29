import { Module } from '@nestjs/common';
import { LawyerService } from './lawyer-service.service';

@Module({
  controllers: [],
  providers: [LawyerService],
  exports: [LawyerService],
})
export class LawyerServiceModule {}
