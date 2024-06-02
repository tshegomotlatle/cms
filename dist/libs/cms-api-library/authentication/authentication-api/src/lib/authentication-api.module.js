"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationApiModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const authentication_api_controller_1 = require("./authentication-api.controller");
const _cms_authentication_service_1 = require("@cms-authentication-service");
const _cms_authentication_repository_1 = require("@cms-authentication-repository");
const jwt_1 = require("@nestjs/jwt");
const access_token_strategy_1 = require("./Strategy/access-token.strategy");
const refresh_token_strategy_1 = require("./Strategy/refresh-token.strategy");
let AuthenticationApiModule = class AuthenticationApiModule {
};
exports.AuthenticationApiModule = AuthenticationApiModule;
exports.AuthenticationApiModule = AuthenticationApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [authentication_api_controller_1.AuthenticationApiController],
        providers: [_cms_authentication_service_1.AuthenticationService, access_token_strategy_1.AccessTokenStrategy, refresh_token_strategy_1.RefreshTokenStrategy],
        exports: [],
        imports: [_cms_authentication_service_1.AuthenticationServiceModule, _cms_authentication_repository_1.AuthenticationRepositoryModule, jwt_1.JwtModule.register({
                global: true
            }),]
    })
], AuthenticationApiModule);
//# sourceMappingURL=authentication-api.module.js.map