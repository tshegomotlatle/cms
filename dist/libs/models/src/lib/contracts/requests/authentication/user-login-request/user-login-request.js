"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLoginRequest = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class UserLoginRequest {
}
exports.UserLoginRequest = UserLoginRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserLoginRequest.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserLoginRequest.prototype, "password", void 0);
//# sourceMappingURL=user-login-request.js.map