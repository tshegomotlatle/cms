import { Module } from '@nestjs/common';
import { AutheticationRepostiory } from './authetication-repostiory';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [],
  providers: [PrismaClient, AutheticationRepostiory],
  exports: [AutheticationRepostiory],
})
export class AuthenticationRepositoryModule {}
