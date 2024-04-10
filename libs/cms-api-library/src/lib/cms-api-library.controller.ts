import { Controller } from '@nestjs/common';
import { CmsApiLibraryService } from './cms-api-library.service';

@Controller('cms-api-library')
export class CmsApiLibraryController {
  constructor(private cmsApiLibraryService: CmsApiLibraryService) {}
}
