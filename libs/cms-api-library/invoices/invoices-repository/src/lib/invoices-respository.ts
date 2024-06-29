import { Invoice } from "@cms-models";
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class InvoicesRespository {

    constructor(private prisma: PrismaClient) {
    }

    public async AddInvoice(invoice: Invoice): Promise<Invoice | null> {
        this.prisma.$connect();

        const result = await this.prisma.invoiceItem.create({
            data: {
                costPerHour: invoice.costPerHour,
                date: invoice.date,
                hours: invoice.hours,
                name: invoice.name,
                case: {
                    connect: {
                        id: invoice.caseId
                    }
                },
                user: {
                    connect: {
                        id: invoice.userId
                    }
                }
            }
        })

        this.prisma.$disconnect();
        return result;
    }

    public async EditInvoice(invoice: Invoice): Promise<Invoice | null> {
        this.prisma.$connect();

        const result = await this.prisma.invoiceItem.update({
            where : {
                id : invoice.id
            },
            data: {
                costPerHour: invoice.costPerHour,
                date: invoice.date,
                hours: invoice.hours,
                name: invoice.name,
            }
        })

        this.prisma.$disconnect();
        return result;
    }

    public async GetInvoiceById(id: string, userId: string): Promise<Invoice | null> {
        this.prisma.$connect();

        const result = await this.prisma.invoiceItem.findUnique({
            where: {
                id: id,
                userId: userId
            }
        })

        this.prisma.$disconnect();
        return result;
    }

    public async GetInvoiceByInvoiceNumber(invoiceNumber: string, userId: string): Promise<Invoice[] | null> {
        this.prisma.$connect();

        const result = await this.prisma.invoiceItem.findMany({
            where: {
                invoiceNumber: invoiceNumber,
                userId: userId
            }
        })

        this.prisma.$disconnect();
        return result;
    }

    public async DeleteInvoice(id: string, userId: string): Promise<Invoice | null> {
        this.prisma.$connect();

        const result = await this.prisma.invoiceItem.delete({
            where: {
                id: id,
                userId: userId
            }
        })

        this.prisma.$disconnect();
        return result;
    }

    
}
