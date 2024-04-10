import { Test } from '@nestjs/testing';
import { CmsApiLibraryService } from './cms-api-library.service';

describe('CmsApiLibraryService', () => {
  let service: CmsApiLibraryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CmsApiLibraryService],
    }).compile();

    service = module.get(CmsApiLibraryService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
