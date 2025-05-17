import { PrismaClient } from "@prisma/client";
import { Lawyer, AddLawyerRequest, UpdateLawyerRequest } from "@cms-models";
import { Injectable } from "@nestjs/common";
import { UUID } from "crypto";

@Injectable()
export class LawyerRepository {
    constructor(private prisma: PrismaClient) { }

    public async GetLawyerByEmail(email: string, userId: string): Promise<Lawyer | null> {
        try {
            const result = await this.prisma.lawyer.findUnique({
                where: {
                    email: email,
                    users: {
                        every:{
                            id: userId
                        }
                    }
                }
            })
            return result;
        } catch {
            return null;
        }
    }

    public async GetLawyerById(id: string, userId: string): Promise<Lawyer | null> {
        try {
            const result = await this.prisma.lawyer.findUnique({
                where: {
                    id: id,
                    users: {
                        every:{
                            id: userId
                        }
                    }
                }
            })
            return result;
        } catch {
            return null;
        }
    }

    public async AddLawyer(lawyer: AddLawyerRequest): Promise<Lawyer | null> {
        try {
            const result = await this.prisma.lawyer.create({
                data: {
                    email: lawyer.email,
                    name: lawyer.name,
                    surname: lawyer.surname,
                    mobileNumber: lawyer.mobileNumber,
                    users: {
                        connect: {
                            id: lawyer.userId
                        }
                    }
                }

            })
            return result;
        } catch {
            return null;
        }
    }

    public async AddLawyerWithCase(lawyer: AddLawyerRequest): Promise<Lawyer | null> {
        try {
            const result = await this.prisma.lawyer.create({
                data: {
                    email: lawyer.email,
                    name: lawyer.name,
                    surname: lawyer.surname,
                    mobileNumber: lawyer.mobileNumber,
                    courtCase: {
                        connect: {
                            id: lawyer.caseId
                        }
                    },
                    users: {
                        connect: {
                            id: lawyer.userId
                        }
                    }
                }

            })
            return result;
        } catch {
            return null;
        }
    }

    public async UpdateLawyer(lawyer: UpdateLawyerRequest, userId: string): Promise<Lawyer | null> {
        try {
            const result = await this.prisma.lawyer.update({
                where: {
                    id: lawyer.id,
                    users: {
                        every:{
                            id: userId
                        }
                    }
                },
                data: {
                    email: lawyer.email,
                    name: lawyer.name,
                    surname: lawyer.surname,
                    mobileNumber: lawyer.mobileNumber
                }
            })
            return result;
        } catch {
            return null;
        }
    }

    public async DeleteLawyer(id: string, userId: string): Promise<Lawyer | null> {
        try {
            const result = await this.prisma.lawyer.delete({
                where: {
                    id: id,
                    users: {
                        every:{
                            id: userId
                        }
                    }
                }
            })
            return result;
        } catch {
            return null;
        }
    }

    public async GetAllLawyers(): Promise<Lawyer[] | null> {
        try {
            const result = await this.prisma.lawyer.findMany();
            return result;
        } catch {
            return null;
        }
    }
}
