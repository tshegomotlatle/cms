import { Module } from '@nestjs/common';
import { ServiceService } from './service.service';

@Module({
  controllers: [],
  providers: [ServiceService],
  exports: [ServiceService],
})
export class ServiceModule {}
