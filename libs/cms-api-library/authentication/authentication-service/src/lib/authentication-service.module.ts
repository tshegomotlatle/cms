import { Module } from '@nestjs/common';
import { AuthenticationRepositoryModule } from '@cms-authentication-repository';

@Module({
  controllers: [],
  providers: [AuthenticationRepositoryModule],
  exports: [],
  imports: [AuthenticationRepositoryModule]
})
export class AuthenticationServiceModule {}
