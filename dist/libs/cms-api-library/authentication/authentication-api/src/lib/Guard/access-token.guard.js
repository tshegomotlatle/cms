"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let AccessTokenGuard = class AccessTokenGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.AccessTokenGuard = AccessTokenGuard;
exports.AccessTokenGuard = AccessTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AccessTokenGuard);
//# sourceMappingURL=access-token.guard.js.map