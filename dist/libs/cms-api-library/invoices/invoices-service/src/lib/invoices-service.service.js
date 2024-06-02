"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesService = void 0;
const tslib_1 = require("tslib");
const _cms_invoices_repository_1 = require("@cms-invoices-repository");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let InvoicesService = class InvoicesService {
    constructor(invoiceRepository, jwtService) {
        this.invoiceRepository = invoiceRepository;
        this.jwtService = jwtService;
    }
    async AddInvoice(invoice) {
        if (!this.ValidateInvoice(invoice))
            return null;
        common_1.Logger.log(invoice);
        return await this.invoiceRepository.AddInvoice(invoice);
    }
    async EditInvoice(invoice) {
        if (!this.ValidateInvoice(invoice))
            return null;
        return await this.invoiceRepository.EditInvoice(invoice);
    }
    async GetInvoiceById(id, accessToken) {
        if (accessToken === "" || id === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.GetInvoiceById(id, user.userId);
    }
    async GetInvoiceByInvoiceNumber(invoiceNumber, accessToken) {
        if (accessToken === "" || invoiceNumber === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.GetInvoiceByInvoiceNumber(invoiceNumber, user.userId);
    }
    async GetInvoiceByCaseNumber(caseNumber, accessToken) {
        if (accessToken === "" || caseNumber === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.GetInvoiceByCaseNumber(caseNumber, user.userId);
    }
    async DeleteInvoice(id, accessToken) {
        if (id === "" || accessToken === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.DeleteInvoice(id, user.userId);
    }
    ValidateInvoice(invoice) {
        if (invoice === null)
            return false;
        if (invoice.caseNumber === "")
            return false;
        if (invoice.name === "")
            return false;
        if (invoice.hours === 0)
            return false;
        if (invoice.date === null)
            return false;
        if (invoice.userId === "")
            return false;
        return true;
    }
};
exports.InvoicesService = InvoicesService;
exports.InvoicesService = InvoicesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [_cms_invoices_repository_1.InvoicesRespository,
        jwt_1.JwtService])
], InvoicesService);
//# sourceMappingURL=invoices-service.service.js.map