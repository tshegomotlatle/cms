import { Module } from '@nestjs/common';
import { AuthenticationRepositoryModule } from '@cms-authentication-repository';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [AuthenticationRepositoryModule]
})
export class AuthenticationServiceModule {}
