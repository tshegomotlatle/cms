"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtCaseRepository = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let CourtCaseRepository = class CourtCaseRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async AddCase(courtCase) {
        this.prisma.$connect();
        common_1.Logger.log(courtCase);
        const result = await this.prisma.courtCase.create({
            data: {
                caseNumber: courtCase.caseNumber,
                status: courtCase.status,
                type: courtCase.type,
                defendant: courtCase.defendant,
                plaintiff: courtCase.plaintiff,
                location: courtCase.location,
                outcome: courtCase.outcome,
                dateCreated: courtCase.dateCreated,
                lawyerId: courtCase.lawyerId,
                userId: courtCase.userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async EditCase(courtCase) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.update({
            where: {
                id: courtCase.id,
            },
            data: {
                caseNumber: courtCase.caseNumber,
                status: courtCase.status,
                type: courtCase.type,
                defendant: courtCase.defendant,
                plaintiff: courtCase.plaintiff,
                location: courtCase.location,
                outcome: courtCase.outcome,
                dateCreated: courtCase.dateCreated,
                lawyerId: courtCase.lawyerId,
                userId: courtCase.userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetCaseById(id, userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.findUnique({
            where: {
                id: id,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetAllCases(userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.findMany({
            where: {
                userId: userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetAllCasesByCaseNumber(caseNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.findUnique({
            where: {
                userId: userId,
                caseNumber: caseNumber
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async DeleteCase(caseNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.delete({
            where: {
                caseNumber: caseNumber,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
};
exports.CourtCaseRepository = CourtCaseRepository;
exports.CourtCaseRepository = CourtCaseRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [client_1.PrismaClient])
], CourtCaseRepository);
//# sourceMappingURL=court-case-repository.js.map