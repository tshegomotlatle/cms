import { PrismaClient } from "@prisma/client";
import { CourtCase } from "@cms-models";
export declare class CourtCaseRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    AddCase(courtCase: CourtCase): Promise<CourtCase>;
    EditCase(courtCase: CourtCase): Promise<CourtCase>;
    GetCaseById(id: string, userId: string): Promise<CourtCase | null>;
    GetAllCases(userId: string): Promise<CourtCase[]>;
    GetAllCasesByCaseNumber(caseNumber: string, userId: string): Promise<CourtCase | null>;
    DeleteCase(caseNumber: string, userId: string): Promise<CourtCase>;
}
