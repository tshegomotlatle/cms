"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesRepositoryModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const court_case_repository_1 = require("./court-case-repository");
const client_1 = require("@prisma/client");
let CourtCasesRepositoryModule = class CourtCasesRepositoryModule {
};
exports.CourtCasesRepositoryModule = CourtCasesRepositoryModule;
exports.CourtCasesRepositoryModule = CourtCasesRepositoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [client_1.PrismaClient, court_case_repository_1.CourtCaseRepository],
        exports: [court_case_repository_1.CourtCaseRepository],
    })
], CourtCasesRepositoryModule);
//# sourceMappingURL=court-cases-repository.module.js.map