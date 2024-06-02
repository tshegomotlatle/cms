import { UploadDocumentRequest, Documents, GetDocumentRequest } from "@cms-models";
import { PrismaClient } from "@prisma/client";
export declare class DocumentsRepository {
    private _prisma;
    constructor(_prisma: PrismaClient);
    UploadDocument(document: UploadDocumentRequest): Promise<Documents>;
    GetDocumentsForCaseId(document: GetDocumentRequest): Promise<Documents[] | null>;
}
