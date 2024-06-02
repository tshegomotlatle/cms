"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsRepositoryModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const documents_repository_1 = require("./documents-repository");
let DocumentsRepositoryModule = class DocumentsRepositoryModule {
};
exports.DocumentsRepositoryModule = DocumentsRepositoryModule;
exports.DocumentsRepositoryModule = DocumentsRepositoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [client_1.PrismaClient, documents_repository_1.DocumentsRepository],
        exports: [documents_repository_1.DocumentsRepository],
    })
], DocumentsRepositoryModule);
//# sourceMappingURL=documents-repository.module.js.map