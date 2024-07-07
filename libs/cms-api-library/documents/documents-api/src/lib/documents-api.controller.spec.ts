import { Test } from '@nestjs/testing';
import { DocumentsApiController } from './documents-api.controller';
import { DocumentsService } from '@cms-documents-service';
import { DocumentsRepository } from '@cms-documents-repository';
import { PrismaClient } from '@prisma/client';
import { CurrentUserService } from '@cms-authetication-api';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException } from '@nestjs/common';

describe('DocumentsApiController', () => {
  let controller: DocumentsApiController;
  let service: DocumentsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DocumentsService, DocumentsRepository, PrismaClient, CurrentUserService, JwtService],
      controllers: [DocumentsApiController],
      imports: [PrismaClient]
    }).compile();

    controller = module.get<DocumentsApiController>(DocumentsApiController);
    service = module.get<DocumentsService>(DocumentsService);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });

  it('should get documents by id', async () => {
    const date = new Date();
    jest.spyOn(service, 'GetDocumentsForCaseId').mockResolvedValue([{
      caseId: "CASE-001",
      fileName: "test.pdf",
      dateCreated: date,
      path: "https://example.com/test.pdf",
      id: "DOC-001"
    }]);

    const result = await controller.GetDocumentsByCaseNumber({ id: "CASE-001" }, { authorization: "1234" });

    expect(result).toBeDefined();
    expect(result).toEqual([{
      caseId: "CASE-001",
      fileName: "test.pdf",
      dateCreated: date,
      path: "https://example.com/test.pdf",
      id: "DOC-001"
    }]);
  });

  it('should return not found when getting documents by id', async () => {
    jest.spyOn(service, 'GetDocumentsForCaseId').mockResolvedValue(new NotFoundException());
    const result = await controller.GetDocumentsByCaseNumber({ id: "CASE-001" }, { authorization: "1234" });
    expect(result).toEqual(new NotFoundException());
  });

  it('should delete a document', async () => {
    jest.spyOn(service, 'DeleteDocument').mockResolvedValue(true);
    const result = await controller.DeleteDocument({ id: "DOC-001" }, { authorization: "1234" });
    expect(result).toBe(true);
  });

});
