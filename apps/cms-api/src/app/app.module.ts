import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationApiModule } from '@cms-authetication-api';
import { CourtCasesApiModule } from '@cms-court-cases-api';

@Module({
  imports: [AuthenticationApiModule, CourtCasesApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
