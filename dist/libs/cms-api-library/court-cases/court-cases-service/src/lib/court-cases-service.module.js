"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesServiceModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const _cms_court_cases_repository_1 = require("@cms-court-cases-repository");
let CourtCasesServiceModule = class CourtCasesServiceModule {
};
exports.CourtCasesServiceModule = CourtCasesServiceModule;
exports.CourtCasesServiceModule = CourtCasesServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: [_cms_court_cases_repository_1.CourtCasesRepositoryModule]
    })
], CourtCasesServiceModule);
//# sourceMappingURL=court-cases-service.module.js.map