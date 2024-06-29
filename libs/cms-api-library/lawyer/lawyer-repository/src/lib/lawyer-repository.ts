import { PrismaClient } from "@prisma/client";
import { Lawyer } from "@cms-models";
import { Injectable } from "@nestjs/common";

@Injectable()
export class LawyerRepository {
    constructor(private prisma: PrismaClient) {
    }

    public async GetLawyerByEmail(email: string): Promise<Lawyer | null> {
        this.prisma.$connect();
        const result = await this.prisma.lawyer.findUnique({
            where: {
                email: email
            }
        })
        this.prisma.$disconnect();
        return result;
    }

    public async GetLawyerById(id: string): Promise<Lawyer | null> {
        this.prisma.$connect();
        const result = await this.prisma.lawyer.findUnique({
            where: {
                id: id
            }
        })
        this.prisma.$disconnect();
        return result;
    }

    public async AddLawyer(lawyer: Lawyer): Promise<Lawyer> {
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
    }

    public async UpdateLawyer(lawyer: Lawyer): Promise<Lawyer> {
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
    }

    public async DeleteLawyer(id: string): Promise<Lawyer> {
        this.prisma.$connect();
        const result = await this.prisma.lawyer.delete({
            where: {
                id: id
            }
        })
        this.prisma.$disconnect();
        return result;
    }

    public async GetAllLawyers(): Promise<Lawyer[]> {
        this.prisma.$connect();
        const result = await this.prisma.lawyer.findMany();
        this.prisma.$disconnect();
        return result;
    }
}
