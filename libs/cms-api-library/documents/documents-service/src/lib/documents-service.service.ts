import { DocumentsRepository } from '@cms-documents-repository';
import { Documents, GetDocumentRequest, UploadDocumentRequest, UserToken } from '@cms-models';
import { Injectable, NotFoundException } from '@nestjs/common';
import { CurrentUserService } from '@cms-authetication-api' 

@Injectable()
export class DocumentsService {

    constructor(
        private _documentsRepository : DocumentsRepository,
        private currentUserService : CurrentUserService){}

    public async GetDocumentsForCaseId(id: string, accessToken : string) : Promise<Documents[] | NotFoundException>
    {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);
        
        const document = await this._documentsRepository.GetDocumentsForCaseId(id, user?.userId || "");

        if (document)
            return document;
        else
            return new NotFoundException()
    }

    public async UploadDocument(newDocument: UploadDocumentRequest, accessToken: string): Promise<boolean | NotFoundException>
    {
        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const document = await this._documentsRepository.UploadDocument(newDocument, user?.userId || "");

        if (document)
            return true;
        else
            return new NotFoundException()
    }

    public async DeleteDocument(id : string, accessToken : string) : Promise<boolean | NotFoundException>
    {

        const user: UserToken | null = this.currentUserService.GetUserToken(accessToken);

        const document = await this._documentsRepository.DeleteDocument(id, user?.userId || "");

        if (document)
            return true;
        else
            return new NotFoundException()
    }
}
