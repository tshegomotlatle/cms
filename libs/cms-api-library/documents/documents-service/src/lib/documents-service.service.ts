import { DocumentsRepository } from '@cms-documents-repository';
import { Documents, GetDocumentRequest, UploadDocumentRequest } from '@cms-models';
import { Injectable } from '@nestjs/common';
import { CurrentUserService } from '@cms-authetication-api' 

@Injectable()
export class DocumentsService {

    constructor(
        private _documentsRepository : DocumentsRepository,
        private currentUserService : CurrentUserService){}

    public GetDocumentsForCaseId(document: GetDocumentRequest, accessToken : string) : Promise<Documents[] | null>
    {
        var userId = this.currentUserService.GetUserToken(accessToken)?.userId || ""
        return this._documentsRepository.GetDocumentsForCaseId(document, userId);
    }

    public UploadDocument(document: UploadDocumentRequest, accessToken: string): Promise<Documents>
    {
        var userId = this.currentUserService.GetUserToken(accessToken)?.userId || ""
        return this._documentsRepository.UploadDocument(document, userId);
    }
}
