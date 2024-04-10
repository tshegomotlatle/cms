import { Module } from '@nestjs/common';
import { AuthenticationApiController } from './authentication-api.controller';

@Module({
  controllers: [AuthenticationApiController],
  providers: [],
  exports: [],
})
export class AuthenticationApiModule {}
