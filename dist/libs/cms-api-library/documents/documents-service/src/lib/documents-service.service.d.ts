import { DocumentsRepository } from '@cms-documents-repository';
import { Documents, GetDocumentRequest, UploadDocumentRequest } from '@cms-models';
export declare class DocumentsService {
    private _documentsRepository;
    constructor(_documentsRepository: DocumentsRepository);
    GetDocumentsForCaseId(document: GetDocumentRequest): Promise<Documents[] | null>;
    UploadDocument(document: UploadDocumentRequest): Promise<Documents>;
}
