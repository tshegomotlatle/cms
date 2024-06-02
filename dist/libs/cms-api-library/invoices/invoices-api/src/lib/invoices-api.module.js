"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoicesApiModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const invoices_api_controller_1 = require("./invoices-api.controller");
const _cms_invoices_service_1 = require("@cms-invoices-service");
const _cms_invoices_repository_1 = require("@cms-invoices-repository");
const jwt_1 = require("@nestjs/jwt");
const client_1 = require("@prisma/client");
let InvoicesApiModule = class InvoicesApiModule {
};
exports.InvoicesApiModule = InvoicesApiModule;
exports.InvoicesApiModule = InvoicesApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [invoices_api_controller_1.InvoicesApiController],
        providers: [_cms_invoices_service_1.InvoicesService, _cms_invoices_repository_1.InvoicesRespository, jwt_1.JwtModule, client_1.PrismaClient],
        exports: [],
        imports: []
    })
], InvoicesApiModule);
//# sourceMappingURL=invoices-api.module.js.map