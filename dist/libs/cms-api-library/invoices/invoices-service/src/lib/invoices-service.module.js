"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesServiceModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const invoices_service_service_1 = require("./invoices-service.service");
const _cms_invoices_repository_1 = require("@cms-invoices-repository");
let InvoicesServiceModule = class InvoicesServiceModule {
};
exports.InvoicesServiceModule = InvoicesServiceModule;
exports.InvoicesServiceModule = InvoicesServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [invoices_service_service_1.InvoicesService, _cms_invoices_repository_1.InvoicesRepositoryModule],
        exports: [invoices_service_service_1.InvoicesService],
        imports: [_cms_invoices_repository_1.InvoicesRepositoryModule]
    })
], InvoicesServiceModule);
//# sourceMappingURL=invoices-service.module.js.map