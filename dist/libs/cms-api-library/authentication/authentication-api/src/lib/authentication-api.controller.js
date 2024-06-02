"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationApiController = void 0;
const tslib_1 = require("tslib");
const _cms_authentication_service_1 = require("@cms-authentication-service");
const common_1 = require("@nestjs/common");
const _cms_models_1 = require("@cms-models");
const authentication_guard_1 = require("./Guard/authentication.guard");
const swagger_1 = require("@nestjs/swagger");
const refresh_token_guard_1 = require("./Guard/refresh-token.guard");
let AuthenticationApiController = class AuthenticationApiController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async login(user) {
        return await this.authenticationService.UserLogin(user.email, user.password);
    }
    async register(user) {
        common_1.Logger.log(user);
        return await this.authenticationService.RegisterUser(user);
    }
    async checkEmail(body) {
        return await this.authenticationService.CheckEmailExists(body.email);
    }
    async getUser(body) {
        return await this.authenticationService.GetUser(body.email);
    }
    async editUser(user) {
        return await this.authenticationService.EditUser(user);
    }
    async updatePassword(body) {
        return await this.authenticationService.UpdatePassword(body.password, body.userId);
    }
    async refreshToken(body) {
        return await this.authenticationService.RefreshToken(body.email, body.refreshToken);
    }
};
exports.AuthenticationApiController = AuthenticationApiController;
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiBody)({ type: _cms_models_1.UserLoginRequest }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.UserLoginRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationApiController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)('register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.UserRegisterRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationApiController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.Post)('checkEmail'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.UserEmailRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationApiController.prototype, "checkEmail", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, common_1.Post)('getUser'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.UserEmailRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationApiController.prototype, "getUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('editUser'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.UserEditRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationApiController.prototype, "editUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('updatePassword'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [_cms_models_1.UpdatePasswordRequest]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationApiController.prototype, "updatePassword", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    (0, common_1.Post)('refreshToken'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthenticationApiController.prototype, "refreshToken", null);
exports.AuthenticationApiController = AuthenticationApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)("authentication"),
    (0, common_1.Controller)('authentication'),
    tslib_1.__metadata("design:paramtypes", [_cms_authentication_service_1.AuthenticationService])
], AuthenticationApiController);
//# sourceMappingURL=authentication-api.controller.js.map