import { DocumentsRepository } from '@cms-documents-repository';
import { Documents, GetDocumentRequest, UploadDocumentRequest } from '@cms-models';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DocumentsService {

    constructor(private _documentsRepository : DocumentsRepository){}

    public GetDocumentsForCaseId(document: GetDocumentRequest) : Promise<Documents[] | null>
    {
        return this._documentsRepository.GetDocumentsForCaseId(document);
    }

    public UploadDocument(document: UploadDocumentRequest): Promise<Documents>
    {
        return this._documentsRepository.UploadDocument(document);
    }
}
