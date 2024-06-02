"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesRespository = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let InvoicesRespository = class InvoicesRespository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async AddInvoice(invoice) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.create({
            data: {
                caseNumber: invoice.caseNumber,
                costPerHour: invoice.costPerHour,
                date: invoice.date,
                hours: invoice.hours,
                name: invoice.name,
                userId: invoice.userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async EditInvoice(invoice) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.update({
            where: {
                id: invoice.id
            },
            data: {
                costPerHour: invoice.costPerHour,
                date: invoice.date,
                hours: invoice.hours,
                name: invoice.name,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetInvoiceById(id, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.findUnique({
            where: {
                id: id,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetInvoiceByInvoiceNumber(invoiceNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.findMany({
            where: {
                invoiceNumber: invoiceNumber,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetInvoiceByCaseNumber(caseNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.findMany({
            where: {
                caseNumber: caseNumber,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async DeleteInvoice(id, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.delete({
            where: {
                id: id,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
};
exports.InvoicesRespository = InvoicesRespository;
exports.InvoicesRespository = InvoicesRespository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [client_1.PrismaClient])
], InvoicesRespository);
//# sourceMappingURL=invoices-respository.js.map