import { CommonFunctionsService } from '@cms-common-functions';
import { DocumentsRepository } from '@cms-documents-repository';
import { JwtService } from '@nestjs/jwt';
import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { DocumentsService } from './documents-service.service';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { NotFoundException } from '@nestjs/common';


describe('DocumentsServiceService', () => {
  let service: DocumentsService;
  let documentRepositoryMock: DeepMockProxy<DocumentsRepository>;
  let prisma: DeepMockProxy<PrismaClient>;
  let currentUserService: DeepMockProxy<CommonFunctionsService>;

  beforeEach(async () => {
    documentRepositoryMock = mockDeep<DocumentsRepository>();
    prisma = mockDeep<PrismaClient>();
    currentUserService = mockDeep<CommonFunctionsService>();

    service = new DocumentsService(documentRepositoryMock, currentUserService);
    currentUserService.GetUserToken.mockReturnValue({
      userId: '123456',
      email: 'test',
    });
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });

  it('should get documets by id', async () => {
    const date = new Date();
    documentRepositoryMock.GetDocumentsForCaseId.mockResolvedValue([{
      caseId: "test",
      fileName: "test",
      dateCreated: date,
      path: "test",
      id: "test"
    }]);

    const result = await service.GetDocumentsForCaseId("test", "test");
    expect(result).toEqual([{
      caseId: "test",
      fileName: "test",
      dateCreated: date,
      path: "test",
      id: "test"
    }]);
  });

  it("should return not found for get documents for case Id", async () => {
    documentRepositoryMock.GetDocumentsForCaseId.mockResolvedValue(null);

    const result = await service.GetDocumentsForCaseId("test", "test");
    expect(result).toEqual(new NotFoundException());
  })

  it("should upload a document", async () => {
    const date = new Date();
    documentRepositoryMock.UploadDocument.mockResolvedValue({
      caseId: "test",
      fileName: "test",
      dateCreated: date,
      path: "test",
      id: "test"
    });

    const result = await service.UploadDocument({
      caseId: "test",
      fileName: "test",
      dateCreated: date,
      path: "test",
    }, "test");
    expect(result).toEqual(true);
  })

  it("should return not found for upload document", async () => {
    documentRepositoryMock.UploadDocument.mockResolvedValue(null);
    const result = await service.UploadDocument({
      caseId: "test",
      fileName: "test",
      dateCreated: new Date(),
      path: "test",
    }, "test");
    expect(result).toEqual(new NotFoundException());
  })

  it("should delete a document", async () => {
    documentRepositoryMock.DeleteDocument.mockResolvedValue({
      id: "test",
      dateCreated: new Date(),
      path: "test",
      fileName: "test",
      caseId: "test",
    });

    const result = await service.DeleteDocument("test", "test");
    expect(result).toEqual(true);
  })

  it("should return not found for delete document", async () => {
    documentRepositoryMock.DeleteDocument.mockResolvedValue(null);
    const result = await service.DeleteDocument("test", "test");
    expect(result).toEqual(new NotFoundException());
  })
});
