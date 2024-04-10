import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationApiModule } from '@cms-authetication-api';

@Module({
  imports: [AuthenticationApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
