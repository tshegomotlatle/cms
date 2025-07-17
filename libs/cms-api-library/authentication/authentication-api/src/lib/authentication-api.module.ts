import { Module } from '@nestjs/common';
import { AuthenticationApiController } from './authentication-api.controller';
import { AuthenticationService, AuthenticationServiceModule } from '@cms-authentication-service';
import { AuthenticationRepositoryModule } from '@cms-authentication-repository';
import { JwtModule } from '@nestjs/jwt';
import { CommonFunctionsService } from '@cms-common-functions';
import { AuthModule } from './config/auth.module';

@Module({
  controllers: [AuthenticationApiController],
  providers: [AuthenticationService, CommonFunctionsService],
  imports: [AuthenticationServiceModule, AuthenticationRepositoryModule, JwtModule.register({
    global: true
  }), AuthModule],
  exports: [AuthModule],
})
export class AuthenticationApiModule { }
