"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCasesService = void 0;
const tslib_1 = require("tslib");
const _cms_court_cases_repository_1 = require("@cms-court-cases-repository");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let CourtCasesService = class CourtCasesService {
    constructor(courtCaseRepository, jwtService) {
        this.courtCaseRepository = courtCaseRepository;
        this.jwtService = jwtService;
    }
    async AddCase(courtCase) {
        courtCase.dateCreated = new Date();
        if (courtCase) {
            return this.courtCaseRepository.AddCase(courtCase);
        }
        else {
            return null;
        }
    }
    async EditCase(courtCase) {
        if (courtCase) {
            return this.courtCaseRepository.EditCase(courtCase);
        }
        else {
            return null;
        }
    }
    async GetCaseById(id, userId) {
        return this.courtCaseRepository.GetCaseById(id, userId);
    }
    async GetAllCases(accessToken) {
        if (accessToken === "")
            return [];
        const user = this.jwtService.decode(accessToken);
        if (!user)
            return [];
        return this.courtCaseRepository.GetAllCases(user.userId);
    }
    async DeleteCase(caseNumber, userId) {
        return this.courtCaseRepository.DeleteCase(caseNumber, userId);
    }
    async GetAllCaseNumbers(userId) {
        const courtCases = await this.courtCaseRepository.GetAllCases(userId);
        const caseNumbers = courtCases.map((courtCase) => {
            return courtCase.caseNumber;
        });
        if (caseNumbers) {
            return { caseNumbers: caseNumbers };
        }
        else {
            return { caseNumbers: [] };
        }
    }
    async GetAllCasesByCaseNumber(caseNumber, accessToken) {
        if (accessToken === "" || caseNumber === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        if (!user)
            return null;
        return this.courtCaseRepository.GetAllCasesByCaseNumber(caseNumber, user.userId);
    }
};
exports.CourtCasesService = CourtCasesService;
exports.CourtCasesService = CourtCasesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [_cms_court_cases_repository_1.CourtCaseRepository,
        jwt_1.JwtService])
], CourtCasesService);
//# sourceMappingURL=court-cases-service.service.js.map