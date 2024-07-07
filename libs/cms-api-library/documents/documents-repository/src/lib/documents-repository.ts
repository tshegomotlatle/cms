import { UploadDocumentRequest, Documents, GetDocumentRequest } from "@cms-models";
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class DocumentsRepository {

    constructor(private _prisma: PrismaClient)
    {}

    public async UploadDocument(document : UploadDocumentRequest, userId : string) : Promise<Documents | null>
    {
        try{
            return await this._prisma.document.create({
                data:{
                    dateCreated: document.dateCreated,
                    path: document.path,
                    fileName: document.fileName,
                    caseId: document.caseId,
                    userId: userId
                }
            })
        } catch (error) {
            return null;
        }
    }

    public async GetDocumentsForCaseId(id: string, userId: string): Promise<Documents[] | null>
    {
        try {
            const cases = await this._prisma.document.findMany({
                where: {
                    caseId: id,
                    userId: userId
                }
            })

            return cases;
        } catch (error) {
            return null;
        }
    }

    public async DeleteDocument(id: string, userId: string): Promise<Documents | null>
    {
        try {
            const document = await this._prisma.document.delete({
                where: {
                    id: id
                }
            });

            return document;
        } catch (error) {
            return null;
        }
    }
}
