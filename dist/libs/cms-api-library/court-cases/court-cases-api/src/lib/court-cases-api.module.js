"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesApiModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const court_cases_api_controller_1 = require("./court-cases-api.controller");
const _cms_court_cases_service_1 = require("@cms-court-cases-service");
const _cms_court_cases_repository_1 = require("@cms-court-cases-repository");
let CourtCasesApiModule = class CourtCasesApiModule {
};
exports.CourtCasesApiModule = CourtCasesApiModule;
exports.CourtCasesApiModule = CourtCasesApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [court_cases_api_controller_1.CourtCasesApiController],
        providers: [_cms_court_cases_service_1.CourtCasesService],
        exports: [],
        imports: [_cms_court_cases_service_1.CourtCasesServiceModule, _cms_court_cases_repository_1.CourtCasesRepositoryModule]
    })
], CourtCasesApiModule);
//# sourceMappingURL=court-cases-api.module.js.map