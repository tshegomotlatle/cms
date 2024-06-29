import { DocumentsService } from '@cms-documents-service';
import { Documents, GetDocumentRequest, UploadDocumentRequest } from '@cms-models';
import { Body, Controller, Logger, Post, UploadedFile, UseInterceptors, Headers } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('documents')
@Controller('documents')
export class DocumentsApiController {

    constructor(private _documentsService : DocumentsService){}

    @Post('GetDocumentsByCaseNumber')
    GetDocumentsByCaseNumber(@Headers() headers : any, @Body() body : GetDocumentRequest): Promise<Documents[] | null> {
        console.log(headers);
        return this._documentsService.GetDocumentsForCaseId(body, headers.authorization);
    }

    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads', 
            filename: (req, file, cb) => {
                // Generating a 32 random chars long string
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }))
    @Post('UploadDocuments')
    UploadDocuments(@Headers() headers: any, @UploadedFile() file: Express.Multer.File, @Body() body: {caseNumber: string}) {
        //return this._documentsService.UploadDocument(file);
        Logger.log(body);
        const uploadFileRequest : UploadDocumentRequest = {
            caseId : body.caseNumber,
            fileName: file.originalname,
            path: file.path,
            dateCreated: new Date()
        };
        return this._documentsService.UploadDocument(uploadFileRequest, headers.authorization);

    }

}
