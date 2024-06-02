"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetInvoicesByInvoiceNumberRequest = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class GetInvoicesByInvoiceNumberRequest {
}
exports.GetInvoicesByInvoiceNumberRequest = GetInvoicesByInvoiceNumberRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByInvoiceNumberRequest.prototype, "invoiceNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByInvoiceNumberRequest.prototype, "accessToken", void 0);
//# sourceMappingURL=get-invoices-by-invoice-number-request.js.map