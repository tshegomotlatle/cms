import { Test } from '@nestjs/testing';
import { DocumentsApiController } from './documents-api.controller';
import { DocumentsService } from '@cms-documents-service';
import { DocumentsRepository } from '@cms-documents-repository';
import { PrismaClient } from '@prisma/client';
import { CurrentUserService } from '@cms-authetication-api';
import { JwtService } from '@nestjs/jwt';

describe('DocumentsApiController', () => {
  let controller: DocumentsApiController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DocumentsService, DocumentsRepository, PrismaClient, CurrentUserService, JwtService],
      controllers: [DocumentsApiController],
      imports: [PrismaClient]
    }).compile();

    controller = module.get(DocumentsApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
