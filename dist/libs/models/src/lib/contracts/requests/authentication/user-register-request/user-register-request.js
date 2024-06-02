"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegisterRequest = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class UserRegisterRequest {
}
exports.UserRegisterRequest = UserRegisterRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserRegisterRequest.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserRegisterRequest.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserRegisterRequest.prototype, "surname", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserRegisterRequest.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserRegisterRequest.prototype, "password", void 0);
//# sourceMappingURL=user-register-request.js.map