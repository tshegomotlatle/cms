import { DocumentsService } from '@cms-documents-service';
import { Documents, GetDocumentRequest } from '@cms-models';
export declare class DocumentsApiController {
    private _documentsService;
    constructor(_documentsService: DocumentsService);
    GetDocumentsByCaseNumber(body: GetDocumentRequest): Promise<Documents[] | null>;
    UploadDocuments(file: Express.Multer.File, body: {
        caseNumber: string;
    }): Promise<Documents>;
}
