import { DocumentsService } from '@cms-documents-service';
import { CaseNumberRequest, Documents, GetDocumentRequest, IdRequest, UploadDocumentRequest } from '@cms-models';
import { Body, Controller, Logger, Post, UploadedFile, UseInterceptors, Headers, Get, Query, NotFoundException, Delete, Param } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiFoundResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { File } from 'buffer';
import { diskStorage } from 'multer';
import { extname } from 'path';

@ApiTags('documents')
@Controller('documents')
@ApiBearerAuth()
export class DocumentsApiController {

    constructor(private _documentsService: DocumentsService) { }

    @Get(':id')
    @ApiOkResponse({ type: Documents, isArray: true })
    @ApiNotFoundResponse({ description: 'Documents not found' })
    @ApiParam({ name: 'id', type: String, description: 'Document id', required: true })
    GetDocumentsByCaseNumber(@Param() param: IdRequest, @Headers() headers: { authorization: string }): Promise<Documents[] | NotFoundException> {
        return this._documentsService.GetDocumentsForCaseId(param.id, headers.authorization);
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
    @ApiOkResponse({ type: Boolean, description: 'Document uploaded' })
    @ApiNotFoundResponse({ description: 'Documents not found' })
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                caseNumber: { type: 'string' },
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    UploadDocuments(@Headers() headers: { authorization: string }, @UploadedFile() file: Express.Multer.File, @Body() body: CaseNumberRequest): Promise<boolean | NotFoundException> {
        const uploadFileRequest: UploadDocumentRequest = {
            caseId: body.caseNumber,
            fileName: file.originalname,
            path: file.path,
            dateCreated: new Date(),
        };
        return this._documentsService.UploadDocument(uploadFileRequest, headers.authorization);
    }

    @Delete(':id')
    @ApiOkResponse({ type: Boolean, description: 'Document deleted' })
    @ApiNotFoundResponse({ description: 'Documents not found' })
    @ApiParam({ name: 'id', type: String, description: 'Document id', required: true })
    DeleteDocument(@Param() param: IdRequest, @Headers() headers: { authorization: string }): Promise<boolean | NotFoundException> {
        return this._documentsService.DeleteDocument(param.id, headers.authorization);
    }

}
