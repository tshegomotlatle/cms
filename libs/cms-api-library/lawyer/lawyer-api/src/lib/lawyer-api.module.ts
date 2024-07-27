import { Module } from '@nestjs/common';
import { LawyerApiController } from './lawyer-api.controller';
import { LawyerRepository, LawyerRepositoryModule } from '@cms/lawyer-repository';
import { LawyerService, LawyerServiceModule } from '@cms/lawyer-service';
import { PrismaClient } from '@prisma/client';
import { CommonFunctionsService } from '@cms-common-functions';

@Module({
  controllers: [LawyerApiController],
  providers: [LawyerService, LawyerRepository, PrismaClient, CommonFunctionsService],
  exports: [],
  imports: [LawyerRepositoryModule, LawyerServiceModule]
})
export class LawyerApiModule { }
