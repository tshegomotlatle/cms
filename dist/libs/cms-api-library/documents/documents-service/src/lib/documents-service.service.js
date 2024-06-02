"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsService = void 0;
const tslib_1 = require("tslib");
const _cms_documents_repository_1 = require("@cms-documents-repository");
const common_1 = require("@nestjs/common");
let DocumentsService = class DocumentsService {
    constructor(_documentsRepository) {
        this._documentsRepository = _documentsRepository;
    }
    GetDocumentsForCaseId(document) {
        return this._documentsRepository.GetDocumentsForCaseId(document);
    }
    UploadDocument(document) {
        return this._documentsRepository.UploadDocument(document);
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [_cms_documents_repository_1.DocumentsRepository])
], DocumentsService);
//# sourceMappingURL=documents-service.service.js.map