import { Injectable, Logger } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CourtCase } from "@cms-models";

@Injectable()
export class CourtCaseRepository {

    constructor(private prisma: PrismaClient) { }

    public async AddCase(courtCase: CourtCase): Promise<CourtCase | null> {
        try {
            return await this.prisma.courtCase.create({
                data: {
                    caseNumber: courtCase.caseNumber,
                    status: courtCase.status,
                    type: courtCase.type,
                    defendant: courtCase.defendant,
                    plaintiff: courtCase.plaintiff,
                    location: courtCase.location,
                    outcome: courtCase.outcome,
                    dateCreated: courtCase.dateCreated,
                    lawyer: {
                        connect: {
                            id: courtCase.lawyerId
                        }
                    },
                    user: {
                        connect: {
                            id: courtCase.userId
                        }
                    }
                }
            });
        } catch (e) {
            return null;
        }
    }

    public async EditCase(courtCase: CourtCase): Promise<CourtCase | null> {
        try {
            return await this.prisma.courtCase.update({
                where: {
                    id: courtCase.id,
                    userId: courtCase.userId
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
                    lawyer: {
                        connect: {
                            id: courtCase.lawyerId
                        }
                    }
                }
            });
        } catch (e) {
            return null;
        }
    }

    public async GetCaseById(id: string, userId: string): Promise<CourtCase | null> {
        try {
            return await this.prisma.courtCase.findUnique({
                where: {
                    id: id,
                    userId: userId
                }
            });
        } catch (e) {
            return null;
        }
    }

    public async GetAllCases(userId: string): Promise<CourtCase[]> {
        try {
            return await this.prisma.courtCase.findMany({
                where: {
                    userId: userId,
                }
            });
        } catch (e) {
            return [];
        }
    }

    public async GetByCaseNumber(caseNumber: string, userId: string): Promise<CourtCase | null> {
        try {
            return await this.prisma.courtCase.findUnique({
                where: {
                    userId: userId,
                    caseNumber: caseNumber
                }
            });
        } catch (e) {
            return null;
        }
    }

    public async DeleteCase(caseNumber: string, userId: string): Promise<CourtCase | null> {
        try {
            return await this.prisma.courtCase.delete({
                where: {
                    caseNumber: caseNumber,
                    userId: userId
                }
            });
        } catch (e) {
            return null;
        }
    }
}

