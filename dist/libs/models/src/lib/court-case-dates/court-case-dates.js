"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesDatesDto = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class CourtCasesDatesDto {
}
exports.CourtCasesDatesDto = CourtCasesDatesDto;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCasesDatesDto.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCasesDatesDto.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCasesDatesDto.prototype, "date", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCasesDatesDto.prototype, "title", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Array)
], CourtCasesDatesDto.prototype, "lawyerIds", void 0);
//# sourceMappingURL=court-case-dates.js.map