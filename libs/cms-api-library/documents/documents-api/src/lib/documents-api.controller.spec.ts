import { Test } from '@nestjs/testing';
import { DocumentsApiController } from './documents-api.controller';

describe('DocumentsApiController', () => {
  let controller: DocumentsApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [DocumentsApiController],
    }).compile();

    controller = module.get(DocumentsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
