"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordRequest = void 0;
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class UpdatePasswordRequest {
}
exports.UpdatePasswordRequest = UpdatePasswordRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UpdatePasswordRequest.prototype, "password", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UpdatePasswordRequest.prototype, "userId", void 0);
//# sourceMappingURL=update-password-request.js.map