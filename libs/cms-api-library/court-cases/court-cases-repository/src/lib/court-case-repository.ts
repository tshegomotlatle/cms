import { Injectable, Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CourtCase } from "@cms-models";

@Injectable()
export class CourtCaseRepository {

    constructor(private prisma : PrismaClient) {
    }

    public async AddCase(courtCase: CourtCase): Promise<CourtCase> {
        this.prisma.$connect();
        Logger.log(courtCase);

        const result = await this.prisma.courtCase.create({
            data: {
                caseNumber: courtCase.caseNumber,
                status: courtCase.status,
                type: courtCase.type,
                defendant: courtCase.defendant,
                plaintiff: courtCase.plaintiff,
                location: courtCase.location,
                outcome: courtCase.outcome,
                date: courtCase.date,
                dateCreated: courtCase.dateCreated,
                lawyerId: courtCase.lawyerId,
                userId: courtCase.userId,
            }
        });

        this.prisma.$disconnect();
        return result;
    }

    public async EditCase(courtCase: CourtCase): Promise<CourtCase> {
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
                date: courtCase.date,
                dateCreated: courtCase.dateCreated,
                lawyerId: courtCase.lawyerId,
                userId: courtCase.userId,
            }
        });

        this.prisma.$disconnect();
        return result;
    }

    public async GetCaseById(id: string, userId: string): Promise<CourtCase | null> {
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

    public async GetAllCases(userId: string): Promise<CourtCase[]> {
        this.prisma.$connect();

        const result = await this.prisma.courtCase.findMany({
            where: {
                userId: userId,
            }
        });

        this.prisma.$disconnect();
        return result;
    }

    public async DeleteCase(caseNumber: string, userId: string): Promise<CourtCase> {
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
}
