import { EditInvoice, Invoice } from "@cms-models";
import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class InvoicesRespository {

    constructor(private prisma: PrismaClient) {
    }

    public async AddInvoice(invoice: Invoice, userId: string): Promise<Invoice | null> {
        try {
            return await this.prisma.invoiceItem.create({
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
                            id: userId
                        }
                    }
                }
            });
        } catch (error) {
            return null;
        }
    }

    public async EditInvoice(invoice: EditInvoice, userId: string): Promise<Invoice | null> {
        try {
            return await this.prisma.invoiceItem.update({
                where: {
                    id: invoice.id,
                    userId: userId,
                },
                data: {
                    costPerHour: invoice.costPerHour,
                    date: invoice.date,
                    hours: invoice.hours,
                    name: invoice.name,
                }
            });
        } catch (error) {
            return null;
        }
    }

    public async GetInvoiceById(id: string, userId: string): Promise<Invoice | null> {
        try {
            return await this.prisma.invoiceItem.findUnique({
                where: {
                    id: id,
                    userId: userId
                }
            });
        } catch (error) {
            return null;
        }
    }

    public async GetInvoiceByInvoiceNumber(invoiceNumber: string, userId: string): Promise<Invoice[] | null> {
        try {
            return await this.prisma.invoiceItem.findMany({
                where: {
                    invoiceNumber: invoiceNumber,
                    userId: userId
                }
            });
        } catch (error) {
            return null;
        }
    }

    public async DeleteInvoice(id: string, userId: string): Promise<Invoice | null> {
        try {
            return await this.prisma.invoiceItem.delete({
                where: {
                    id: id,
                    userId: userId
                }
            });
        } catch (error) {
            return null;
        }
    }


}
