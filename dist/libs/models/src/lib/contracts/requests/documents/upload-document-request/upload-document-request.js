"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadDocumentRequest = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class UploadDocumentRequest {
}
exports.UploadDocumentRequest = UploadDocumentRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UploadDocumentRequest.prototype, "path", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UploadDocumentRequest.prototype, "fileName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UploadDocumentRequest.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], UploadDocumentRequest.prototype, "dateCreated", void 0);
//# sourceMappingURL=upload-document-request.js.map