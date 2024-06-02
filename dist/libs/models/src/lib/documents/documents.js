"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class Documents {
}
exports.Documents = Documents;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "fileName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "path", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], Documents.prototype, "dateCreated", void 0);
//# sourceMappingURL=documents.js.map