import { Module } from '@nestjs/common';
import { CommonFunctionsService } from './common-functions.service';

@Module({
  controllers: [],
  providers: [CommonFunctionsService],
  exports: [CommonFunctionsService],
})
export class CommonFunctionsModule {}
