import { Module } from '@nestjs/common';
import { AuthenticationApiController } from './authentication-api.controller';
import { AuthenticationService, AuthenticationServiceModule } from '@cms-authentication-service';
import { AuthenticationRepositoryModule } from '@cms-authentication-repository';
import { JwtModule } from '@nestjs/jwt';
import { CommonFunctionsService } from '@cms-common-functions';

@Module({
  controllers: [AuthenticationApiController],
  providers: [AuthenticationService, CommonFunctionsService],
  exports: [],
  imports: [AuthenticationServiceModule, AuthenticationRepositoryModule, JwtModule.register({
    global: true
  }),]
})
export class AuthenticationApiModule { }
