import { Test } from '@nestjs/testing';
import { DocumentsServiceService } from './documents-service.service';

describe('DocumentsServiceService', () => {
  let service: DocumentsServiceService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DocumentsServiceService],
    }).compile();

    service = module.get(DocumentsServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
