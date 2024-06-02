"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationGuard = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const process_1 = require("process");
let AuthenticationGuard = class AuthenticationGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process_1.env['JWT_SECRET']
            });
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthenticationGuard = AuthenticationGuard;
exports.AuthenticationGuard = AuthenticationGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [jwt_1.JwtService])
], AuthenticationGuard);
//# sourceMappingURL=authentication.guard.js.map