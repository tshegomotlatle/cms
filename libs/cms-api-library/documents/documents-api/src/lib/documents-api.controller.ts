import { DocumentsService } from '@cms-documents-service';
import { Documents, GetDocumentRequest, IdRequest, UploadDocumentRequest } from '@cms-models';
import { Body, Controller, Logger, Post, UploadedFile, UseInterceptors, Headers, Get, Query, NotFoundException, Delete } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('documents')
@Controller('documents')
@ApiBearerAuth()
export class DocumentsApiController {

    constructor(private _documentsService : DocumentsService){}

    @Get(':id')
    @ApiFoundResponse({ type: [Documents], isArray: true })
    @ApiNotFoundResponse({description: 'Documents not found'})
    @ApiQuery({ name: 'id', type: String })
    GetDocumentsByCaseNumber(@Query() query: IdRequest, @Headers() headers : {authorization: string}): Promise<Documents[] | NotFoundException> {
        return this._documentsService.GetDocumentsForCaseId(query.id, headers.authorization);
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
    @Post()
    @ApiFoundResponse({ type: Boolean, description: 'Document uploaded' })
    @ApiNotFoundResponse({ description: 'Documents not found' })
    UploadDocuments(@Headers() headers: { authorization: string }, @UploadedFile() file: Express.Multer.File, @Body() body: {caseNumber: string}): Promise<boolean | NotFoundException> {
        const uploadFileRequest: UploadDocumentRequest = {
            caseId: body.caseNumber,
            fileName: file.originalname,
            path: file.path,
            dateCreated: new Date(),
        };
        return this._documentsService.UploadDocument(uploadFileRequest, headers.authorization);
    }

    @Delete()
    @ApiOkResponse({ type: Boolean, description: 'Document deleted' })
    @ApiNotFoundResponse({ description: 'Documents not found' })
    DeleteDocument(@Body() body: IdRequest, @Headers() headers: { authorization: string }): Promise<boolean | NotFoundException> {
        return this._documentsService.DeleteDocument(body.id, headers.authorization);
    }

}
