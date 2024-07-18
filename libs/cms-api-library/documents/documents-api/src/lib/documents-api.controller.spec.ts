import { Test } from '@nestjs/testing';
import { DocumentsApiController } from './documents-api.controller';
import { DocumentsService } from '@cms-documents-service';
import { DocumentsRepository } from '@cms-documents-repository';
import { PrismaClient } from '@prisma/client';
import { CommonFunctionsService } from '@cms-common-functions';
import { JwtService } from '@nestjs/jwt';
import { NotFoundException, UploadedFile } from '@nestjs/common';
import { UploadDocumentRequest } from '@cms-models';

describe('DocumentsApiController', () => {
  let controller: DocumentsApiController;
  let service: DocumentsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [DocumentsService, DocumentsRepository, PrismaClient, CommonFunctionsService, JwtService],
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

  it('should upload a document', async () => {
    jest.spyOn(service, 'UploadDocument').mockResolvedValue(true);

    var uploadRequest: UploadDocumentRequest = {
      path: "https://example.com/test.pdf",
      fileName: "test.pdf",
      caseId: "CASE-001",
      dateCreated: new Date()
    }

    const result = await controller.UploadDocuments({ authorization: "1234" }, new File([], "test.pdf") as unknown as Express.Multer.File, { caseNumber: "CASE-001" });
    expect(result).toBe(true);
  });

  it('should return not found when uploading a document', async () => {
    jest.spyOn(service, 'UploadDocument').mockResolvedValue(new NotFoundException());
    const result = await controller.UploadDocuments({ authorization: "1234" }, new File([], "test.pdf") as unknown as Express.Multer.File, { caseNumber: "CASE-001" });
    expect(result).toEqual(new NotFoundException());
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
