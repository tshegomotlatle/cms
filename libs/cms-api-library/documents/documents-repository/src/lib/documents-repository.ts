import { UploadDocumentRequest, Documents, GetDocumentRequest } from "@cms-models";
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class DocumentsRepository {

    constructor(private _prisma: PrismaClient)
    {}

    public async UploadDocument(document : UploadDocumentRequest) : Promise<Documents>
    {
        return await this._prisma.documents.create({
            data:{
                dateCreated: document.dateCreated,
                path: document.path,
                caseNumber: document.caseNumber,
                fileName: document.fileName
            }
        })

    }

    public async GetDocumentsForCaseId(document: GetDocumentRequest): Promise<Documents[] | null>
    {
        const cases = await this._prisma.documents.findMany({
            where: {
                caseNumber: document.caseNumber
            }
        })

        if (cases.length < 0)
        {
            return null;
        }

        return cases;
    }
}