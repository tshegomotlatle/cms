import { Module } from '@nestjs/common';
import { LawyerRepository, LawyerRepositoryModule } from '@cms/lawyer-repository';
import { PrismaClient } from '@prisma/client';
import { LawyerService } from './lawyer-service.service';

@Module({
  controllers: [],
  providers: [LawyerRepository, PrismaClient],
  exports: [LawyerServiceModule],
  imports: [LawyerRepositoryModule],
})
export class LawyerServiceModule {}
