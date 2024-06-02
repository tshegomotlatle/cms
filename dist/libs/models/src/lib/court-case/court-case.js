"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCase = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class CourtCase {
}
exports.CourtCase = CourtCase;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "location", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "plaintiff", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "defendant", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "status", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Object)
], CourtCase.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Object)
], CourtCase.prototype, "outcome", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "lawyerId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Date)
], CourtCase.prototype, "dateCreated", void 0);
//# sourceMappingURL=court-case.js.map