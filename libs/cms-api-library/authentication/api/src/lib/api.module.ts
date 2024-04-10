import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';

@Module({
  controllers: [ApiController],
  providers: [],
  exports: [],
})
export class ApiModule {}
