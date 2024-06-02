"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesApiController = void 0;
const tslib_1 = require("tslib");
const _cms_invoices_service_1 = require("@cms-invoices-service");
const _cms_models_1 = require("@cms-models");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
let InvoicesApiController = class InvoicesApiController {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    add(body) {
        return this.invoiceService.AddInvoice(body);
    }
    delete(body) {
        return this.invoiceService.DeleteInvoice(body.id, body.accessToken);
    }
    edit(body) {
        return this.invoiceService.EditInvoice(body);
    }
    getInvoiceById(body) {
        return this.invoiceService.GetInvoiceById(body.id, body.accessToken);
    }
    getInvoiceByInvoiceNumber(body) {
        return this.invoiceService.GetInvoiceByInvoiceNumber(body.invoiceNumber, body.accessToken);
    }
    getInvoiceByCaseNumber(body) {
        common_1.Logger.log(body);
        return this.invoiceService.GetInvoiceByCaseNumber(body.caseNumber, body.accessToken);
    }
};
exports.InvoicesApiController = InvoicesApiController;
tslib_1.__decorate([
    (0, common_1.Post)('add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.Invoice]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesApiController.prototype, "add", null);
tslib_1.__decorate([
    (0, common_1.Post)('delete'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.GetInvoicesByIdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesApiController.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.Post)('edit'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.Invoice]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesApiController.prototype, "edit", null);
tslib_1.__decorate([
    (0, common_1.Post)('getInvoiceById'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.GetInvoicesByIdRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesApiController.prototype, "getInvoiceById", null);
tslib_1.__decorate([
    (0, common_1.Post)('getInvoiceByInvoiceNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.GetInvoicesByInvoiceNumberRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesApiController.prototype, "getInvoiceByInvoiceNumber", null);
tslib_1.__decorate([
    (0, common_1.Post)('getInvoiceByCaseNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.GetInvoicesByCaseNumberRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], InvoicesApiController.prototype, "getInvoiceByCaseNumber", null);
exports.InvoicesApiController = InvoicesApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)("invoices"),
    (0, common_1.Controller)('invoices'),
    tslib_1.__metadata("design:paramtypes", [_cms_invoices_service_1.InvoicesService])
], InvoicesApiController);
//# sourceMappingURL=invoices-api.controller.js.map