"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesApiController = void 0;
const tslib_1 = require("tslib");
const _cms_models_1 = require("@cms-models");
const common_1 = require("@nestjs/common");
const _cms_court_cases_service_1 = require("@cms-court-cases-service");
const swagger_1 = require("@nestjs/swagger");
const _cms_authetication_api_1 = require("@cms-authetication-api");
let CourtCasesApiController = class CourtCasesApiController {
    constructor(_courtCaseService) {
        this._courtCaseService = _courtCaseService;
    }
    add(courtCase) {
        return this._courtCaseService.AddCase(courtCase);
    }
    delete(body) {
        return this._courtCaseService.DeleteCase(body.caseNumber, body.userId);
    }
    getAllCases(body) {
        return this._courtCaseService.GetAllCases(body.accessToken);
    }
    edit(courtCase) {
        return this._courtCaseService.EditCase(courtCase);
    }
    //@UseGuards(AuthenticationGuard)
    getCaseById(body) {
        return this._courtCaseService.GetCaseById(body.id, body.userId);
    }
    getAllCaseNumbers(body) {
        return this._courtCaseService.GetAllCaseNumbers(body.userId);
    }
    getCaseByCaseNumber(body) {
        common_1.Logger.log(body);
        return this._courtCaseService.GetAllCasesByCaseNumber(body.caseNumber, body.accessToken);
    }
};
exports.CourtCasesApiController = CourtCasesApiController;
tslib_1.__decorate([
    (0, common_1.Post)('add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.CourtCase]),
    tslib_1.__metadata("design:returntype", Promise)
], CourtCasesApiController.prototype, "add", null);
tslib_1.__decorate([
    (0, common_1.Post)('delete'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourtCasesApiController.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(_cms_authetication_api_1.AccessTokenGuard),
    (0, common_1.Post)('getAllCases'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourtCasesApiController.prototype, "getAllCases", null);
tslib_1.__decorate([
    (0, common_1.Post)('edit'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.CourtCase]),
    tslib_1.__metadata("design:returntype", Promise)
], CourtCasesApiController.prototype, "edit", null);
tslib_1.__decorate([
    (0, common_1.Post)('getCaseById'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourtCasesApiController.prototype, "getCaseById", null);
tslib_1.__decorate([
    (0, common_1.Post)('getAllCaseNumbers'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourtCasesApiController.prototype, "getAllCaseNumbers", null);
tslib_1.__decorate([
    (0, common_1.Post)('getCaseByCaseNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CourtCasesApiController.prototype, "getCaseByCaseNumber", null);
exports.CourtCasesApiController = CourtCasesApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)("court-cases"),
    (0, common_1.Controller)('court-cases'),
    tslib_1.__metadata("design:paramtypes", [_cms_court_cases_service_1.CourtCasesService])
], CourtCasesApiController);
//# sourceMappingURL=court-cases-api.controller.js.map