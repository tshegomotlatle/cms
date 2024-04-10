import { Module } from '@nestjs/common';
import { User } from './user/user';

@Module({
  controllers: [],
  providers: [],
  exports: [User],
})
export class ModelsModule {}
