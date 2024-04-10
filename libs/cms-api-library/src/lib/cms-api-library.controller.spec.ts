import { Test } from '@nestjs/testing';
import { CmsApiLibraryController } from './cms-api-library.controller';
import { CmsApiLibraryService } from './cms-api-library.service';

describe('CmsApiLibraryController', () => {
  let controller: CmsApiLibraryController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CmsApiLibraryService],
      controllers: [CmsApiLibraryController],
    }).compile();

    controller = module.get(CmsApiLibraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
