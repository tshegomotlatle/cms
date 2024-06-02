"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentsRepository = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let DocumentsRepository = class DocumentsRepository {
    constructor(_prisma) {
        this._prisma = _prisma;
    }
    async UploadDocument(document) {
        return await this._prisma.documents.create({
            data: {
                dateCreated: document.dateCreated,
                path: document.path,
                caseNumber: document.caseNumber,
                fileName: document.fileName
            }
        });
    }
    async GetDocumentsForCaseId(document) {
        const cases = await this._prisma.documents.findMany({
            where: {
                caseNumber: document.caseNumber
            }
        });
        if (cases.length < 0) {
            return null;
        }
        return cases;
    }
};
exports.DocumentsRepository = DocumentsRepository;
exports.DocumentsRepository = DocumentsRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [client_1.PrismaClient])
], DocumentsRepository);
//# sourceMappingURL=documents-repository.js.map