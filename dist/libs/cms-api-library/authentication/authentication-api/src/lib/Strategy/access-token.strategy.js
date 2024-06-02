"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccessTokenStrategy = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const process_1 = require("process");
let AccessTokenStrategy = class AccessTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process_1.env['JWT_SECRET'],
        });
    }
    validate(payload) {
        return payload;
    }
};
exports.AccessTokenStrategy = AccessTokenStrategy;
exports.AccessTokenStrategy = AccessTokenStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], AccessTokenStrategy);
//# sourceMappingURL=access-token.strategy.js.map