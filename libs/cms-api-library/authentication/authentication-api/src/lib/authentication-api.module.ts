import { Module } from '@nestjs/common';
import { AuthenticationApiController } from './authentication-api.controller';
import { AuthenticationService, AuthenticationServiceModule } from '@cms-authentication-service';
import { AuthenticationRepositoryModule } from '@cms-authentication-repository';
import { env } from 'process';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthenticationApiController],
  providers: [AuthenticationService],
  exports: [],
  imports: [AuthenticationServiceModule, AuthenticationRepositoryModule, JwtModule.register({
    global: true,
    secret: env['JWT_SECRET'],
    signOptions: { expiresIn: '1h' },

  }),]
})
export class AuthenticationApiModule {}
