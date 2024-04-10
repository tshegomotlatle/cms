import { Module } from '@nestjs/common';
import { AuthenticationServiceService } from './authentication-service.service';

@Module({
  controllers: [],
  providers: [AuthenticationServiceService],
  exports: [AuthenticationServiceService],
})
export class AuthenticationServiceModule {}
