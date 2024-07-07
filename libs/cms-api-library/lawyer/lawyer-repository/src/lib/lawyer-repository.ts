import { PrismaClient } from "@prisma/client";
import { Lawyer, AddLawyerRequest, UpdateLawyerRequest } from "@cms-models";
import { Injectable } from "@nestjs/common";
import { UUID } from "crypto";

@Injectable()
export class LawyerRepository {
    constructor(private prisma: PrismaClient) { }

    public async GetLawyerByEmail(email: string): Promise<Lawyer | null> {
        try {
            this.prisma.$connect();
            const result = await this.prisma.lawyer.findUnique({
                where: {
                    email: email
                }
            })
            this.prisma.$disconnect();
            return result;
        } catch {
            return null;
        }
    }

    public async GetLawyerById(id: string): Promise<Lawyer | null> {
        try {
            this.prisma.$connect();
            const result = await this.prisma.lawyer.findUnique({
                where: {
                    id: id
                }
            })
            this.prisma.$disconnect();
            return result;
        } catch {
            return null;
        }
    }

    public async AddLawyer(lawyer: AddLawyerRequest): Promise<Lawyer | null> {
        try {
            this.prisma.$connect();
            const result = await this.prisma.lawyer.create({
                data: {
                    email: lawyer.email,
                    name: lawyer.name,
                    surname: lawyer.surname,
                    mobileNumber: lawyer.mobileNumber
                }
            })
            this.prisma.$disconnect();
            return result;
        } catch {
            return null;
        }
    }

    public async UpdateLawyer(lawyer: UpdateLawyerRequest): Promise<Lawyer | null> {
        try {
            this.prisma.$connect();
            const result = await this.prisma.lawyer.update({
                where: {
                    id: lawyer.id
                },
                data: {
                    email: lawyer.email,
                    name: lawyer.name,
                    surname: lawyer.surname,
                    mobileNumber: lawyer.mobileNumber
                }
            })
            this.prisma.$disconnect();
            return result;
        } catch {
            return null;
        }
    }

    public async DeleteLawyer(id: string): Promise<Lawyer | null> {
        try {
            this.prisma.$connect();
            const result = await this.prisma.lawyer.delete({
                where: {
                    id: id
                }
            })
            this.prisma.$disconnect();
            return result;
        } catch {
            return null;
        }
    }

    public async GetAllLawyers(): Promise<Lawyer[] | null> {
        try {
            this.prisma.$connect();
            const result = await this.prisma.lawyer.findMany();
            this.prisma.$disconnect();
            return result;
        } catch {
            return null;
        }
    }
}
