"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEditRequest = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class UserEditRequest {
}
exports.UserEditRequest = UserEditRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserEditRequest.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserEditRequest.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserEditRequest.prototype, "surname", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserEditRequest.prototype, "mobileNumber", void 0);
//# sourceMappingURL=user-edit-request.js.map