import { PrismaClient } from '@prisma/client';
import { DocumentsRepository } from './documents-repository';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';
import { PrismaClientUnknownRequestError } from '@prisma/client/runtime/library';
import { error } from 'console';


describe('DocumentsRepository', () => {

  let documentsRepository: DocumentsRepository;
  let prisma: DeepMockProxy<PrismaClient>;


  beforeEach(() => {
    prisma = mockDeep<PrismaClient>();
    documentsRepository = new DocumentsRepository(prisma);
  });

  it('should be defined', () => {
    expect(documentsRepository).toBeDefined();
  });

  it('should upload a document', async () => {
    const date = new Date();
    prisma.document.create.mockResolvedValue({
      id: "test",
      dateCreated: date,
      path: "test",
      fileName: "test",
      caseId: "test",
      userId: "test"
    });

    const result = await documentsRepository.UploadDocument({
      dateCreated: date,
      path: "test",
      fileName: "test",
      caseId: "test",
    }, "test");

    expect(result).toBeDefined();
    expect(result).toEqual({
      id: "test",
      dateCreated: date,
      path: "test",
      fileName: "test",
      caseId: "test",
      userId: "test"
    });
  });

  it('shoould return null for upload document', async () => {
    prisma.document.create.mockRejectedValue(new Error());
    const result = await documentsRepository.UploadDocument({
      dateCreated: new Date(),
      path: "test",
      fileName: "test",
      caseId: "test",
    }, "test");
    expect(result).toBe(null);
  });

  it('should get all documents for case Id', async () => {
    const date = new Date();
    prisma.document.findMany.mockResolvedValue([{
      id: "test",
      dateCreated: date,
      path: "test",
      fileName: "test",
      caseId: "test",
      userId: "test"
    }]);

    const result = await documentsRepository.GetDocumentsForCaseId("test", "test");

    expect(result).toEqual([{
      id: "test",
      dateCreated: date,
      path: "test",
      fileName: "test",
      caseId: "test",
      userId: "test"
    }]);
  });

  it("should return null for get documents for case Id", async () => {
    prisma.document.findMany.mockRejectedValue(new Error());
    const result = await documentsRepository.GetDocumentsForCaseId("test", "test");

    expect(result).toBe(null);
  });


  it('should delete a document', async () => {
    prisma.document.delete.mockResolvedValue({
      id: "test",
      dateCreated: new Date(),
      path: "test",
      fileName: "test",
      caseId: "test",
      userId: "test"
    });

    const result = await documentsRepository.DeleteDocument("test", "test");

    expect(result).toEqual({
      id: "test",
      dateCreated: new Date(),
      path: "test",
      fileName: "test",
      caseId: "test",
      userId: "test"
    });
  });
});
