"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenStrategy = void 0;
const tslib_1 = require("tslib");
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const common_1 = require("@nestjs/common");
const process_1 = require("process");
let RefreshTokenStrategy = class RefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process_1.env['JWT_SECRET_REFRESH'],
            passReqToCallback: true,
        });
    }
    validate(req, payload) {
        let refreshToken = "";
        if (req.get('Authorization') !== undefined) {
            refreshToken = req.get('Authorization')?.replace('Bearer', '').trim();
        }
        return { ...payload, refreshToken };
    }
};
exports.RefreshTokenStrategy = RefreshTokenStrategy;
exports.RefreshTokenStrategy = RefreshTokenStrategy = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [])
], RefreshTokenStrategy);
//# sourceMappingURL=refresh-token.strategy.js.map