import { Module } from '@nestjs/common';
import { AuthenticationApiController } from './authentication-api.controller';
import { AuthenticationService, AuthenticationServiceModule } from '@cms-authentication-service';
import { AuthenticationRepositoryModule } from '@cms-authentication-repository';
import { env } from 'process';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from './Strategy/access-token.strategy';
import { RefreshTokenStrategy } from './Strategy/refresh-token.strategy';

@Module({
  controllers: [AuthenticationApiController],
  providers: [AuthenticationService, AccessTokenStrategy, RefreshTokenStrategy],
  exports: [],
  imports: [AuthenticationServiceModule, AuthenticationRepositoryModule, JwtModule.register({
    global: true
  }),]
})
export class AuthenticationApiModule { }
