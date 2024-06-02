"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsServiceModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const _cms_documents_repository_1 = require("@cms-documents-repository");
let DocumentsServiceModule = class DocumentsServiceModule {
};
exports.DocumentsServiceModule = DocumentsServiceModule;
exports.DocumentsServiceModule = DocumentsServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: [_cms_documents_repository_1.DocumentsRepositoryModule]
    })
], DocumentsServiceModule);
//# sourceMappingURL=documents-service.module.js.map