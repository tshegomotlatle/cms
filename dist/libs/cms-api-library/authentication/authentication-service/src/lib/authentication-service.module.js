"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationServiceModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const _cms_authentication_repository_1 = require("@cms-authentication-repository");
let AuthenticationServiceModule = class AuthenticationServiceModule {
};
exports.AuthenticationServiceModule = AuthenticationServiceModule;
exports.AuthenticationServiceModule = AuthenticationServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [_cms_authentication_repository_1.AuthenticationRepositoryModule],
        exports: [],
        imports: [_cms_authentication_repository_1.AuthenticationRepositoryModule]
    })
], AuthenticationServiceModule);
//# sourceMappingURL=authentication-service.module.js.map