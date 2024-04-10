import { Module } from '@nestjs/common';
import { CmsApiLibraryController } from './cms-api-library.controller';
import { CmsApiLibraryService } from './cms-api-library.service';

@Module({
  controllers: [CmsApiLibraryController],
  providers: [CmsApiLibraryService],
  exports: [CmsApiLibraryService],
})
export class CmsApiLibraryModule {}
