import { UploadDocumentRequest, Documents, GetDocumentRequest } from "@cms-models";
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class DocumentsRepository {

    constructor(private _prisma: PrismaClient)
    {}

    public async UploadDocument(document : UploadDocumentRequest, userId : string) : Promise<Documents>
    {
        return await this._prisma.document.create({
            data:{
                dateCreated: document.dateCreated,
                path: document.path,
                fileName: document.fileName,
                caseId: document.caseId,
                userId: userId
            }
        })

    }

    public async GetDocumentsForCaseId(document: GetDocumentRequest, userId: string): Promise<Documents[] | null>
    {
        const cases = await this._prisma.document.findMany({
            where: {
                caseId: document.caseId,
                userId: userId
            }
        })

        if (cases.length < 0)
        {
            return null;
        }

        return cases;
    }
}