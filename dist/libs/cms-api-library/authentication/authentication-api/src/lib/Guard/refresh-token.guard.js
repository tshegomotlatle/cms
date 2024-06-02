"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let RefreshTokenGuard = class RefreshTokenGuard extends (0, passport_1.AuthGuard)('jwt-refresh') {
};
exports.RefreshTokenGuard = RefreshTokenGuard;
exports.RefreshTokenGuard = RefreshTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], RefreshTokenGuard);
//# sourceMappingURL=refresh-token.guard.js.map