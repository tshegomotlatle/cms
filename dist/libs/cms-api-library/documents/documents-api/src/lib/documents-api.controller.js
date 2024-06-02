"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsApiController = void 0;
const tslib_1 = require("tslib");
const _cms_documents_service_1 = require("@cms-documents-service");
const _cms_models_1 = require("@cms-models");
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const multer_1 = require("multer");
const path_1 = require("path");
let DocumentsApiController = class DocumentsApiController {
    constructor(_documentsService) {
        this._documentsService = _documentsService;
    }
    GetDocumentsByCaseNumber(body) {
        return this._documentsService.GetDocumentsForCaseId(body);
    }
    UploadDocuments(file, body) {
        //return this._documentsService.UploadDocument(file);
        common_1.Logger.log(body);
        const uploadFileRequest = {
            caseNumber: body.caseNumber,
            fileName: file.originalname,
            path: file.path,
            dateCreated: new Date()
        };
        return this._documentsService.UploadDocument(uploadFileRequest);
    }
};
exports.DocumentsApiController = DocumentsApiController;
tslib_1.__decorate([
    (0, common_1.Post)('GetDocumentsByCaseNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.GetDocumentRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], DocumentsApiController.prototype, "GetDocumentsByCaseNumber", null);
tslib_1.__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                // Generating a 32 random chars long string
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    (0, common_1.Post)('UploadDocuments'),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DocumentsApiController.prototype, "UploadDocuments", null);
exports.DocumentsApiController = DocumentsApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('documents'),
    (0, common_1.Controller)('documents'),
    tslib_1.__metadata("design:paramtypes", [_cms_documents_service_1.DocumentsService])
], DocumentsApiController);
//# sourceMappingURL=documents-api.controller.js.map