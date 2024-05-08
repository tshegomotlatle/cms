import { Test } from '@nestjs/testing';
import { DocumentsService } from './documents-service.service';
import { Prisma, PrismaClient } from '@prisma/client';
import { DocumentsRepository } from '@cms-documents-repository';

describe('DocumentsServiceService', () => {
  let service: DocumentsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DocumentsService, DocumentsRepository, PrismaClient],
      imports: [PrismaClient]
    }).compile();

    service = module.get(DocumentsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
