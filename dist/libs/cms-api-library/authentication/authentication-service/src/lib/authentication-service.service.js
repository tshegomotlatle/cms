"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationService = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const _cms_authentication_repository_1 = require("@cms-authentication-repository");
const jwt_1 = require("@nestjs/jwt");
const process_1 = require("process");
let AuthenticationService = class AuthenticationService {
    constructor(authenticationRepository, jwtService) {
        this.authenticationRepository = authenticationRepository;
        this.jwtService = jwtService;
    }
    async RegisterUser(user) {
        return await this.authenticationRepository.RegisterUser(user);
    }
    async UserLogin(email, password) {
        common_1.Logger.log(email);
        common_1.Logger.log(password);
        if (email === "" || email === undefined || password === "" || password === undefined) {
            return {
                accessToken: "",
                refreshToken: ""
            };
        }
        const user = await this.authenticationRepository.GetUser(email);
        common_1.Logger.log(user);
        if (user) {
            const passwordHash = await bcrypt.hash(password, user.password || "");
            if (passwordHash == user?.password) {
                const payload = { userId: user.id, username: user.email };
                const accessToken = await this.jwtService.signAsync(payload, {
                    secret: process_1.env['JWT_SECRET'],
                    expiresIn: process_1.env['JWT_SECRET_TIME']
                });
                const refreshToken = await this.jwtService.signAsync(payload, {
                    secret: process_1.env['JWT_SECRET_REFRESH'],
                    expiresIn: process_1.env['JWT_SECRET_TIME_REFRESH']
                });
                this.authenticationRepository.UpdateRefreshToken(user.email, refreshToken);
                return {
                    accessToken: accessToken,
                    refreshToken: refreshToken,
                };
            }
        }
        return {
            accessToken: "",
            refreshToken: ""
        };
    }
    async CheckEmailExists(email) {
        const user = await this.authenticationRepository.GetUser(email);
        if (user) {
            return true;
        }
        else {
            return false;
        }
    }
    async EditUser(user) {
        const result = await this.authenticationRepository.EditUser(user);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    async UpdatePassword(password, userId) {
        const result = await this.authenticationRepository.UpdatePassword(password, userId);
        if (result) {
            return true;
        }
        else {
            return false;
        }
    }
    async GetUser(email) {
        return await this.authenticationRepository.GetUser(email);
    }
    async RefreshToken(email, refreshToken) {
        const user = await this.GetUser(email);
        if (!user || !user.refreshToken) {
            return {
                accessToken: "",
            };
        }
        if (refreshToken != user.refreshToken) {
            return {
                accessToken: "",
            };
        }
        const payload = { userId: user.id, username: user.email };
        const accessToken = await this.jwtService.signAsync(payload, {
            secret: process_1.env['JWT_SECRET'],
            expiresIn: process_1.env['JWT_SECRET_TIME']
        });
        return {
            accessToken: accessToken,
        };
    }
};
exports.AuthenticationService = AuthenticationService;
exports.AuthenticationService = AuthenticationService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [_cms_authentication_repository_1.AutheticationRepostiory,
        jwt_1.JwtService])
], AuthenticationService);
//# sourceMappingURL=authentication-service.service.js.map