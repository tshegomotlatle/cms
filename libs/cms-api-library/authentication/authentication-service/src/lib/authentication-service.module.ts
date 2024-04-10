import { Module } from '@nestjs/common';
import { AuthenticationRepositoryModule, AutheticationRepostiory } from '@cms-authentication-repository';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [AuthenticationRepositoryModule]
})
export class AuthenticationServiceModule {}
