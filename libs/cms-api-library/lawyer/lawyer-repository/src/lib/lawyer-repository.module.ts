import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { LawyerRepository } from './lawyer-repository';

@Module({
  controllers: [],
  providers: [PrismaClient],
  exports: [LawyerRepositoryModule],
})
export class LawyerRepositoryModule {}
