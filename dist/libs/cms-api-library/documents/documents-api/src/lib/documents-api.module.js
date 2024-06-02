"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsApiModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const documents_api_controller_1 = require("./documents-api.controller");
const _cms_documents_service_1 = require("@cms-documents-service");
const _cms_documents_repository_1 = require("@cms-documents-repository");
let DocumentsApiModule = class DocumentsApiModule {
};
exports.DocumentsApiModule = DocumentsApiModule;
exports.DocumentsApiModule = DocumentsApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [documents_api_controller_1.DocumentsApiController],
        providers: [_cms_documents_service_1.DocumentsService],
        exports: [],
        imports: [_cms_documents_service_1.DocumentsServiceModule, _cms_documents_repository_1.DocumentsRepositoryModule]
    })
], DocumentsApiModule);
//# sourceMappingURL=documents-api.module.js.map