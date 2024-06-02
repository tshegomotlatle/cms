/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_controller_1 = __webpack_require__(5);
const app_service_1 = __webpack_require__(6);
const _cms_authetication_api_1 = __webpack_require__(7);
const _cms_court_cases_api_1 = __webpack_require__(44);
const _cms_documents_api_1 = __webpack_require__(53);
const _cms_invoices_api_1 = __webpack_require__(65);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [_cms_authetication_api_1.AuthenticationApiModule, _cms_court_cases_api_1.CourtCasesApiModule, _cms_documents_api_1.DocumentsApiModule, _cms_invoices_api_1.InvoicesApiModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const app_service_1 = __webpack_require__(6);
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
exports.AppController = AppController;
tslib_1.__decorate([
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AppController.prototype, "getData", null);
exports.AppController = AppController = tslib_1.__decorate([
    (0, common_1.Controller)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let AppService = class AppService {
    getData() {
        return { message: 'Hello API' };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AppService);


/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(43), exports);
tslib_1.__exportStar(__webpack_require__(38), exports);


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationApiModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const authentication_api_controller_1 = __webpack_require__(9);
const _cms_authentication_service_1 = __webpack_require__(10);
const _cms_authentication_repository_1 = __webpack_require__(13);
const jwt_1 = __webpack_require__(17);
const access_token_strategy_1 = __webpack_require__(40);
const refresh_token_strategy_1 = __webpack_require__(42);
let AuthenticationApiModule = class AuthenticationApiModule {
};
exports.AuthenticationApiModule = AuthenticationApiModule;
exports.AuthenticationApiModule = AuthenticationApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [authentication_api_controller_1.AuthenticationApiController],
        providers: [_cms_authentication_service_1.AuthenticationService, access_token_strategy_1.AccessTokenStrategy, refresh_token_strategy_1.RefreshTokenStrategy],
        exports: [],
        imports: [_cms_authentication_service_1.AuthenticationServiceModule, _cms_authentication_repository_1.AuthenticationRepositoryModule, jwt_1.JwtModule.register({
                global: true
            }),]
    })
], AuthenticationApiModule);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationApiController = void 0;
const tslib_1 = __webpack_require__(4);
const _cms_authentication_service_1 = __webpack_require__(10);
const common_1 = __webpack_require__(1);
const _cms_models_1 = __webpack_require__(20);
const authentication_guard_1 = __webpack_require__(37);
const swagger_1 = __webpack_require__(23);
const refresh_token_guard_1 = __webpack_require__(38);
let AuthenticationApiController = class AuthenticationApiController {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    async login(user) {
        return await this.authenticationService.UserLogin(user.email, user.password);
    }
    async register(user) {
        common_1.Logger.log(user);
        return await this.authenticationService.RegisterUser(user);
    }
    async checkEmail(body) {
        return await this.authenticationService.CheckEmailExists(body.email);
    }
    async getUser(body) {
        return await this.authenticationService.GetUser(body.email);
    }
    async editUser(user) {
        return await this.authenticationService.EditUser(user);
    }
    async updatePassword(body) {
        return await this.authenticationService.UpdatePassword(body.password, body.userId);
    }
    async refreshToken(body) {
        return await this.authenticationService.RefreshToken(body.email, body.refreshToken);
    }
};
exports.AuthenticationApiController = AuthenticationApiController;
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiBody)({ type: _cms_models_1.UserLoginRequest }),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof _cms_models_1.UserLoginRequest !== "undefined" && _cms_models_1.UserLoginRequest) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], AuthenticationApiController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)('register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof _cms_models_1.UserRegisterRequest !== "undefined" && _cms_models_1.UserRegisterRequest) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], AuthenticationApiController.prototype, "register", null);
tslib_1.__decorate([
    (0, common_1.Post)('checkEmail'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof _cms_models_1.UserEmailRequest !== "undefined" && _cms_models_1.UserEmailRequest) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthenticationApiController.prototype, "checkEmail", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(authentication_guard_1.AuthenticationGuard),
    (0, common_1.Post)('getUser'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof _cms_models_1.UserEmailRequest !== "undefined" && _cms_models_1.UserEmailRequest) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], AuthenticationApiController.prototype, "getUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('editUser'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof _cms_models_1.UserEditRequest !== "undefined" && _cms_models_1.UserEditRequest) === "function" ? _k : Object]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], AuthenticationApiController.prototype, "editUser", null);
tslib_1.__decorate([
    (0, common_1.Post)('updatePassword'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_m = typeof _cms_models_1.UpdatePasswordRequest !== "undefined" && _cms_models_1.UpdatePasswordRequest) === "function" ? _m : Object]),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], AuthenticationApiController.prototype, "updatePassword", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(refresh_token_guard_1.RefreshTokenGuard),
    (0, common_1.Post)('refreshToken'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_p = typeof Promise !== "undefined" && Promise) === "function" ? _p : Object)
], AuthenticationApiController.prototype, "refreshToken", null);
exports.AuthenticationApiController = AuthenticationApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)("authentication"),
    (0, common_1.Controller)('authentication'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_authentication_service_1.AuthenticationService !== "undefined" && _cms_authentication_service_1.AuthenticationService) === "function" ? _a : Object])
], AuthenticationApiController);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(19), exports);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationService = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const bcrypt = tslib_1.__importStar(__webpack_require__(12));
const _cms_authentication_repository_1 = __webpack_require__(13);
const jwt_1 = __webpack_require__(17);
const process_1 = __webpack_require__(18);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_authentication_repository_1.AutheticationRepostiory !== "undefined" && _cms_authentication_repository_1.AutheticationRepostiory) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthenticationService);


/***/ }),
/* 12 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationRepositoryModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const authetication_repostiory_1 = __webpack_require__(15);
const client_1 = __webpack_require__(16);
let AuthenticationRepositoryModule = class AuthenticationRepositoryModule {
};
exports.AuthenticationRepositoryModule = AuthenticationRepositoryModule;
exports.AuthenticationRepositoryModule = AuthenticationRepositoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [client_1.PrismaClient, authetication_repostiory_1.AutheticationRepostiory],
        exports: [authetication_repostiory_1.AutheticationRepostiory],
    })
], AuthenticationRepositoryModule);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AutheticationRepostiory = void 0;
const tslib_1 = __webpack_require__(4);
const client_1 = __webpack_require__(16);
const bcrypt = tslib_1.__importStar(__webpack_require__(12));
const common_1 = __webpack_require__(1);
let AutheticationRepostiory = class AutheticationRepostiory {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async RegisterUser(user) {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(user.password, salt);
        this.prisma.$connect();
        const result = await this.prisma.user.create({
            data: {
                email: user.email,
                name: user.name,
                surname: user.surname,
                mobileNumber: user.mobileNumber,
                password: hashPassword,
                passwordSalt: salt,
                refreshToken: ""
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetUser(email) {
        this.prisma.$connect();
        const user = await this.prisma.user.findUnique({
            where: {
                email: email
            }
        });
        common_1.Logger.log(user);
        this.prisma.$disconnect();
        return user;
    }
    async EditUser(user) {
        this.prisma.$connect();
        const result = await this.prisma.user.update({
            where: {
                id: user.id,
            },
            data: {
                name: user.name,
                surname: user.surname,
                mobileNumber: user.mobileNumber,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async UpdatePassword(password, userId) {
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);
        this.prisma.$connect();
        const result = await this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                password: hashPassword,
                passwordSalt: salt
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async UpdateRefreshToken(email, refreshToken) {
        this.prisma.$connect();
        const result = await this.prisma.user.update({
            where: {
                email: email,
            },
            data: {
                refreshToken: refreshToken,
            },
        });
        this.prisma.$disconnect();
        return result;
    }
    async DeleteUser(email) {
        this.prisma.$connect();
        const result = await this.prisma.user.delete({
            where: {
                email: email,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
};
exports.AutheticationRepostiory = AutheticationRepostiory;
exports.AutheticationRepostiory = AutheticationRepostiory = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.PrismaClient !== "undefined" && client_1.PrismaClient) === "function" ? _a : Object])
], AutheticationRepostiory);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = require("process");

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationServiceModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const _cms_authentication_repository_1 = __webpack_require__(13);
let AuthenticationServiceModule = class AuthenticationServiceModule {
};
exports.AuthenticationServiceModule = AuthenticationServiceModule;
exports.AuthenticationServiceModule = AuthenticationServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [_cms_authentication_repository_1.AuthenticationRepositoryModule],
        exports: [],
        imports: [_cms_authentication_repository_1.AuthenticationRepositoryModule]
    })
], AuthenticationServiceModule);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(21), exports);
tslib_1.__exportStar(__webpack_require__(22), exports);
tslib_1.__exportStar(__webpack_require__(24), exports);
tslib_1.__exportStar(__webpack_require__(25), exports);
tslib_1.__exportStar(__webpack_require__(26), exports);
tslib_1.__exportStar(__webpack_require__(27), exports);
tslib_1.__exportStar(__webpack_require__(28), exports);
tslib_1.__exportStar(__webpack_require__(29), exports);
tslib_1.__exportStar(__webpack_require__(30), exports);
tslib_1.__exportStar(__webpack_require__(31), exports);
tslib_1.__exportStar(__webpack_require__(32), exports);
tslib_1.__exportStar(__webpack_require__(33), exports);
tslib_1.__exportStar(__webpack_require__(34), exports);
tslib_1.__exportStar(__webpack_require__(35), exports);
tslib_1.__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ModelsModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const user_1 = __webpack_require__(22);
let ModelsModule = class ModelsModule {
};
exports.ModelsModule = ModelsModule;
exports.ModelsModule = ModelsModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [user_1.User],
    })
], ModelsModule);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class User {
}
exports.User = User;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "surname", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "mobileNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "passwordSalt", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "refreshToken", void 0);


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtCase = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class CourtCase {
}
exports.CourtCase = CourtCase;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "location", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "plaintiff", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "defendant", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "status", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "type", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "outcome", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "lawyerId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], CourtCase.prototype, "userId", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CourtCase.prototype, "dateCreated", void 0);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Documents = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class Documents {
}
exports.Documents = Documents;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "fileName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "path", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Documents.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Documents.prototype, "dateCreated", void 0);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Invoice = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class Invoice {
}
exports.Invoice = Invoice;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "invoiceNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "name", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Invoice.prototype, "date", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Number)
], Invoice.prototype, "hours", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", Number)
], Invoice.prototype, "costPerHour", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], Invoice.prototype, "userId", void 0);


/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEmailRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class UserEmailRequest {
}
exports.UserEmailRequest = UserEmailRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UserEmailRequest.prototype, "email", void 0);


/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdatePasswordRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
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


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserLoginRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
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


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEditRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
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


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRegisterRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
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


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetDocumentRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class GetDocumentRequest {
}
exports.GetDocumentRequest = GetDocumentRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetDocumentRequest.prototype, "caseNumber", void 0);


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UploadDocumentRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class UploadDocumentRequest {
}
exports.UploadDocumentRequest = UploadDocumentRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UploadDocumentRequest.prototype, "path", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UploadDocumentRequest.prototype, "fileName", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], UploadDocumentRequest.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UploadDocumentRequest.prototype, "dateCreated", void 0);


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetInvoicesByIdRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class GetInvoicesByIdRequest {
}
exports.GetInvoicesByIdRequest = GetInvoicesByIdRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByIdRequest.prototype, "id", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByIdRequest.prototype, "accessToken", void 0);


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetInvoicesByInvoiceNumberRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class GetInvoicesByInvoiceNumberRequest {
}
exports.GetInvoicesByInvoiceNumberRequest = GetInvoicesByInvoiceNumberRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByInvoiceNumberRequest.prototype, "invoiceNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByInvoiceNumberRequest.prototype, "accessToken", void 0);


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetInvoicesByCaseNumberRequest = void 0;
const tslib_1 = __webpack_require__(4);
const swagger_1 = __webpack_require__(23);
class GetInvoicesByCaseNumberRequest {
}
exports.GetInvoicesByCaseNumberRequest = GetInvoicesByCaseNumberRequest;
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByCaseNumberRequest.prototype, "caseNumber", void 0);
tslib_1.__decorate([
    (0, swagger_1.ApiProperty)(),
    tslib_1.__metadata("design:type", String)
], GetInvoicesByCaseNumberRequest.prototype, "accessToken", void 0);


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthenticationGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(17);
const process_1 = __webpack_require__(18);
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
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthenticationGuard);


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(39);
let RefreshTokenGuard = class RefreshTokenGuard extends (0, passport_1.AuthGuard)('jwt-refresh') {
};
exports.RefreshTokenGuard = RefreshTokenGuard;
exports.RefreshTokenGuard = RefreshTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], RefreshTokenGuard);


/***/ }),
/* 39 */
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenStrategy = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(39);
const passport_jwt_1 = __webpack_require__(41);
const process_1 = __webpack_require__(18);
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


/***/ }),
/* 41 */
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RefreshTokenStrategy = void 0;
const tslib_1 = __webpack_require__(4);
const passport_1 = __webpack_require__(39);
const passport_jwt_1 = __webpack_require__(41);
const common_1 = __webpack_require__(1);
const process_1 = __webpack_require__(18);
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


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessTokenGuard = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const passport_1 = __webpack_require__(39);
let AccessTokenGuard = class AccessTokenGuard extends (0, passport_1.AuthGuard)('jwt') {
};
exports.AccessTokenGuard = AccessTokenGuard;
exports.AccessTokenGuard = AccessTokenGuard = tslib_1.__decorate([
    (0, common_1.Injectable)()
], AccessTokenGuard);


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtCasesApiModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const court_cases_api_controller_1 = __webpack_require__(46);
const _cms_court_cases_service_1 = __webpack_require__(47);
const _cms_court_cases_repository_1 = __webpack_require__(49);
let CourtCasesApiModule = class CourtCasesApiModule {
};
exports.CourtCasesApiModule = CourtCasesApiModule;
exports.CourtCasesApiModule = CourtCasesApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [court_cases_api_controller_1.CourtCasesApiController],
        providers: [_cms_court_cases_service_1.CourtCasesService],
        exports: [],
        imports: [_cms_court_cases_service_1.CourtCasesServiceModule, _cms_court_cases_repository_1.CourtCasesRepositoryModule]
    })
], CourtCasesApiModule);


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtCasesApiController = void 0;
const tslib_1 = __webpack_require__(4);
const _cms_models_1 = __webpack_require__(20);
const common_1 = __webpack_require__(1);
const _cms_court_cases_service_1 = __webpack_require__(47);
const swagger_1 = __webpack_require__(23);
const _cms_authetication_api_1 = __webpack_require__(7);
let CourtCasesApiController = class CourtCasesApiController {
    constructor(_courtCaseService) {
        this._courtCaseService = _courtCaseService;
    }
    add(courtCase) {
        return this._courtCaseService.AddCase(courtCase);
    }
    delete(body) {
        return this._courtCaseService.DeleteCase(body.caseNumber, body.userId);
    }
    getAllCases(body) {
        return this._courtCaseService.GetAllCases(body.accessToken);
    }
    edit(courtCase) {
        return this._courtCaseService.EditCase(courtCase);
    }
    //@UseGuards(AuthenticationGuard)
    getCaseById(body) {
        return this._courtCaseService.GetCaseById(body.id, body.userId);
    }
    getAllCaseNumbers(body) {
        return this._courtCaseService.GetAllCaseNumbers(body.userId);
    }
    getCaseByCaseNumber(body) {
        common_1.Logger.log(body);
        return this._courtCaseService.GetAllCasesByCaseNumber(body.caseNumber, body.accessToken);
    }
};
exports.CourtCasesApiController = CourtCasesApiController;
tslib_1.__decorate([
    (0, common_1.Post)('add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof _cms_models_1.CourtCase !== "undefined" && _cms_models_1.CourtCase) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], CourtCasesApiController.prototype, "add", null);
tslib_1.__decorate([
    (0, common_1.Post)('delete'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], CourtCasesApiController.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(_cms_authetication_api_1.AccessTokenGuard),
    (0, common_1.Post)('getAllCases'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], CourtCasesApiController.prototype, "getAllCases", null);
tslib_1.__decorate([
    (0, common_1.Post)('edit'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof _cms_models_1.CourtCase !== "undefined" && _cms_models_1.CourtCase) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], CourtCasesApiController.prototype, "edit", null);
tslib_1.__decorate([
    (0, common_1.Post)('getCaseById'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], CourtCasesApiController.prototype, "getCaseById", null);
tslib_1.__decorate([
    (0, common_1.Post)('getAllCaseNumbers'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], CourtCasesApiController.prototype, "getAllCaseNumbers", null);
tslib_1.__decorate([
    (0, common_1.Post)('getCaseByCaseNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", typeof (_k = typeof Promise !== "undefined" && Promise) === "function" ? _k : Object)
], CourtCasesApiController.prototype, "getCaseByCaseNumber", null);
exports.CourtCasesApiController = CourtCasesApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)("court-cases"),
    (0, common_1.Controller)('court-cases'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_court_cases_service_1.CourtCasesService !== "undefined" && _cms_court_cases_service_1.CourtCasesService) === "function" ? _a : Object])
], CourtCasesApiController);


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(48), exports);
tslib_1.__exportStar(__webpack_require__(52), exports);


/***/ }),
/* 48 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtCasesService = void 0;
const tslib_1 = __webpack_require__(4);
const _cms_court_cases_repository_1 = __webpack_require__(49);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(17);
let CourtCasesService = class CourtCasesService {
    constructor(courtCaseRepository, jwtService) {
        this.courtCaseRepository = courtCaseRepository;
        this.jwtService = jwtService;
    }
    async AddCase(courtCase) {
        courtCase.dateCreated = new Date();
        if (courtCase) {
            return this.courtCaseRepository.AddCase(courtCase);
        }
        else {
            return null;
        }
    }
    async EditCase(courtCase) {
        if (courtCase) {
            return this.courtCaseRepository.EditCase(courtCase);
        }
        else {
            return null;
        }
    }
    async GetCaseById(id, userId) {
        return this.courtCaseRepository.GetCaseById(id, userId);
    }
    async GetAllCases(accessToken) {
        if (accessToken === "")
            return [];
        const user = this.jwtService.decode(accessToken);
        if (!user)
            return [];
        return this.courtCaseRepository.GetAllCases(user.userId);
    }
    async DeleteCase(caseNumber, userId) {
        return this.courtCaseRepository.DeleteCase(caseNumber, userId);
    }
    async GetAllCaseNumbers(userId) {
        const courtCases = await this.courtCaseRepository.GetAllCases(userId);
        const caseNumbers = courtCases.map((courtCase) => {
            return courtCase.caseNumber;
        });
        if (caseNumbers) {
            return { caseNumbers: caseNumbers };
        }
        else {
            return { caseNumbers: [] };
        }
    }
    async GetAllCasesByCaseNumber(caseNumber, accessToken) {
        if (accessToken === "" || caseNumber === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        if (!user)
            return null;
        return this.courtCaseRepository.GetAllCasesByCaseNumber(caseNumber, user.userId);
    }
};
exports.CourtCasesService = CourtCasesService;
exports.CourtCasesService = CourtCasesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_court_cases_repository_1.CourtCaseRepository !== "undefined" && _cms_court_cases_repository_1.CourtCaseRepository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], CourtCasesService);


/***/ }),
/* 49 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(50), exports);
tslib_1.__exportStar(__webpack_require__(51), exports);


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtCasesRepositoryModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const court_case_repository_1 = __webpack_require__(51);
const client_1 = __webpack_require__(16);
let CourtCasesRepositoryModule = class CourtCasesRepositoryModule {
};
exports.CourtCasesRepositoryModule = CourtCasesRepositoryModule;
exports.CourtCasesRepositoryModule = CourtCasesRepositoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [client_1.PrismaClient, court_case_repository_1.CourtCaseRepository],
        exports: [court_case_repository_1.CourtCaseRepository],
    })
], CourtCasesRepositoryModule);


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtCaseRepository = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(16);
let CourtCaseRepository = class CourtCaseRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async AddCase(courtCase) {
        this.prisma.$connect();
        common_1.Logger.log(courtCase);
        const result = await this.prisma.courtCase.create({
            data: {
                caseNumber: courtCase.caseNumber,
                status: courtCase.status,
                type: courtCase.type,
                defendant: courtCase.defendant,
                plaintiff: courtCase.plaintiff,
                location: courtCase.location,
                outcome: courtCase.outcome,
                dateCreated: courtCase.dateCreated,
                lawyerId: courtCase.lawyerId,
                userId: courtCase.userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async EditCase(courtCase) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.update({
            where: {
                id: courtCase.id,
            },
            data: {
                caseNumber: courtCase.caseNumber,
                status: courtCase.status,
                type: courtCase.type,
                defendant: courtCase.defendant,
                plaintiff: courtCase.plaintiff,
                location: courtCase.location,
                outcome: courtCase.outcome,
                dateCreated: courtCase.dateCreated,
                lawyerId: courtCase.lawyerId,
                userId: courtCase.userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetCaseById(id, userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.findUnique({
            where: {
                id: id,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetAllCases(userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.findMany({
            where: {
                userId: userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetAllCasesByCaseNumber(caseNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.findUnique({
            where: {
                userId: userId,
                caseNumber: caseNumber
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async DeleteCase(caseNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.courtCase.delete({
            where: {
                caseNumber: caseNumber,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
};
exports.CourtCaseRepository = CourtCaseRepository;
exports.CourtCaseRepository = CourtCaseRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.PrismaClient !== "undefined" && client_1.PrismaClient) === "function" ? _a : Object])
], CourtCaseRepository);


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtCasesServiceModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const _cms_court_cases_repository_1 = __webpack_require__(49);
let CourtCasesServiceModule = class CourtCasesServiceModule {
};
exports.CourtCasesServiceModule = CourtCasesServiceModule;
exports.CourtCasesServiceModule = CourtCasesServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: [_cms_court_cases_repository_1.CourtCasesRepositoryModule]
    })
], CourtCasesServiceModule);


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(54), exports);
tslib_1.__exportStar(__webpack_require__(64), exports);


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentsApiController = void 0;
const tslib_1 = __webpack_require__(4);
const _cms_documents_service_1 = __webpack_require__(55);
const _cms_models_1 = __webpack_require__(20);
const common_1 = __webpack_require__(1);
const platform_express_1 = __webpack_require__(61);
const swagger_1 = __webpack_require__(23);
const multer_1 = __webpack_require__(62);
const path_1 = __webpack_require__(63);
let DocumentsApiController = class DocumentsApiController {
    constructor(_documentsService) {
        this._documentsService = _documentsService;
    }
    GetDocumentsByCaseNumber(body) {
        return this._documentsService.GetDocumentsForCaseId(body);
    }
    UploadDocuments(file, body) {
        //return this._documentsService.UploadDocument(file);
        common_1.Logger.log(body);
        const uploadFileRequest = {
            caseNumber: body.caseNumber,
            fileName: file.originalname,
            path: file.path,
            dateCreated: new Date()
        };
        return this._documentsService.UploadDocument(uploadFileRequest);
    }
};
exports.DocumentsApiController = DocumentsApiController;
tslib_1.__decorate([
    (0, common_1.Post)('GetDocumentsByCaseNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof _cms_models_1.GetDocumentRequest !== "undefined" && _cms_models_1.GetDocumentRequest) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], DocumentsApiController.prototype, "GetDocumentsByCaseNumber", null);
tslib_1.__decorate([
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, cb) => {
                // Generating a 32 random chars long string
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                //Calling the callback passing the random name generated with the original extension name
                cb(null, `${randomName}${(0, path_1.extname)(file.originalname)}`);
            }
        })
    })),
    (0, common_1.Post)('UploadDocuments'),
    tslib_1.__param(0, (0, common_1.UploadedFile)()),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_e = typeof Express !== "undefined" && (_d = Express.Multer) !== void 0 && _d.File) === "function" ? _e : Object, Object]),
    tslib_1.__metadata("design:returntype", void 0)
], DocumentsApiController.prototype, "UploadDocuments", null);
exports.DocumentsApiController = DocumentsApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)('documents'),
    (0, common_1.Controller)('documents'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_documents_service_1.DocumentsService !== "undefined" && _cms_documents_service_1.DocumentsService) === "function" ? _a : Object])
], DocumentsApiController);


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(56), exports);
tslib_1.__exportStar(__webpack_require__(60), exports);


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentsService = void 0;
const tslib_1 = __webpack_require__(4);
const _cms_documents_repository_1 = __webpack_require__(57);
const common_1 = __webpack_require__(1);
let DocumentsService = class DocumentsService {
    constructor(_documentsRepository) {
        this._documentsRepository = _documentsRepository;
    }
    GetDocumentsForCaseId(document) {
        return this._documentsRepository.GetDocumentsForCaseId(document);
    }
    UploadDocument(document) {
        return this._documentsRepository.UploadDocument(document);
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_documents_repository_1.DocumentsRepository !== "undefined" && _cms_documents_repository_1.DocumentsRepository) === "function" ? _a : Object])
], DocumentsService);


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(58), exports);
tslib_1.__exportStar(__webpack_require__(59), exports);


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentsRepositoryModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(16);
const documents_repository_1 = __webpack_require__(59);
let DocumentsRepositoryModule = class DocumentsRepositoryModule {
};
exports.DocumentsRepositoryModule = DocumentsRepositoryModule;
exports.DocumentsRepositoryModule = DocumentsRepositoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [client_1.PrismaClient, documents_repository_1.DocumentsRepository],
        exports: [documents_repository_1.DocumentsRepository],
    })
], DocumentsRepositoryModule);


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentsRepository = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(16);
let DocumentsRepository = class DocumentsRepository {
    constructor(_prisma) {
        this._prisma = _prisma;
    }
    async UploadDocument(document) {
        return await this._prisma.documents.create({
            data: {
                dateCreated: document.dateCreated,
                path: document.path,
                caseNumber: document.caseNumber,
                fileName: document.fileName
            }
        });
    }
    async GetDocumentsForCaseId(document) {
        const cases = await this._prisma.documents.findMany({
            where: {
                caseNumber: document.caseNumber
            }
        });
        if (cases.length < 0) {
            return null;
        }
        return cases;
    }
};
exports.DocumentsRepository = DocumentsRepository;
exports.DocumentsRepository = DocumentsRepository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.PrismaClient !== "undefined" && client_1.PrismaClient) === "function" ? _a : Object])
], DocumentsRepository);


/***/ }),
/* 60 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentsServiceModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const _cms_documents_repository_1 = __webpack_require__(57);
let DocumentsServiceModule = class DocumentsServiceModule {
};
exports.DocumentsServiceModule = DocumentsServiceModule;
exports.DocumentsServiceModule = DocumentsServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: [_cms_documents_repository_1.DocumentsRepositoryModule]
    })
], DocumentsServiceModule);


/***/ }),
/* 61 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 62 */
/***/ ((module) => {

module.exports = require("multer");

/***/ }),
/* 63 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DocumentsApiModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const documents_api_controller_1 = __webpack_require__(54);
const _cms_documents_service_1 = __webpack_require__(55);
const _cms_documents_repository_1 = __webpack_require__(57);
let DocumentsApiModule = class DocumentsApiModule {
};
exports.DocumentsApiModule = DocumentsApiModule;
exports.DocumentsApiModule = DocumentsApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [documents_api_controller_1.DocumentsApiController],
        providers: [_cms_documents_service_1.DocumentsService],
        exports: [],
        imports: [_cms_documents_service_1.DocumentsServiceModule, _cms_documents_repository_1.DocumentsRepositoryModule]
    })
], DocumentsApiModule);


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(66), exports);
tslib_1.__exportStar(__webpack_require__(73), exports);


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesApiController = void 0;
const tslib_1 = __webpack_require__(4);
const _cms_invoices_service_1 = __webpack_require__(67);
const _cms_models_1 = __webpack_require__(20);
const common_1 = __webpack_require__(1);
const swagger_1 = __webpack_require__(23);
let InvoicesApiController = class InvoicesApiController {
    constructor(invoiceService) {
        this.invoiceService = invoiceService;
    }
    add(body) {
        return this.invoiceService.AddInvoice(body);
    }
    delete(body) {
        return this.invoiceService.DeleteInvoice(body.id, body.accessToken);
    }
    edit(body) {
        return this.invoiceService.EditInvoice(body);
    }
    getInvoiceById(body) {
        return this.invoiceService.GetInvoiceById(body.id, body.accessToken);
    }
    getInvoiceByInvoiceNumber(body) {
        return this.invoiceService.GetInvoiceByInvoiceNumber(body.invoiceNumber, body.accessToken);
    }
    getInvoiceByCaseNumber(body) {
        common_1.Logger.log(body);
        return this.invoiceService.GetInvoiceByCaseNumber(body.caseNumber, body.accessToken);
    }
};
exports.InvoicesApiController = InvoicesApiController;
tslib_1.__decorate([
    (0, common_1.Post)('add'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof _cms_models_1.Invoice !== "undefined" && _cms_models_1.Invoice) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], InvoicesApiController.prototype, "add", null);
tslib_1.__decorate([
    (0, common_1.Post)('delete'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_d = typeof _cms_models_1.GetInvoicesByIdRequest !== "undefined" && _cms_models_1.GetInvoicesByIdRequest) === "function" ? _d : Object]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], InvoicesApiController.prototype, "delete", null);
tslib_1.__decorate([
    (0, common_1.Post)('edit'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_f = typeof _cms_models_1.Invoice !== "undefined" && _cms_models_1.Invoice) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], InvoicesApiController.prototype, "edit", null);
tslib_1.__decorate([
    (0, common_1.Post)('getInvoiceById'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_h = typeof _cms_models_1.GetInvoicesByIdRequest !== "undefined" && _cms_models_1.GetInvoicesByIdRequest) === "function" ? _h : Object]),
    tslib_1.__metadata("design:returntype", typeof (_j = typeof Promise !== "undefined" && Promise) === "function" ? _j : Object)
], InvoicesApiController.prototype, "getInvoiceById", null);
tslib_1.__decorate([
    (0, common_1.Post)('getInvoiceByInvoiceNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_k = typeof _cms_models_1.GetInvoicesByInvoiceNumberRequest !== "undefined" && _cms_models_1.GetInvoicesByInvoiceNumberRequest) === "function" ? _k : Object]),
    tslib_1.__metadata("design:returntype", typeof (_l = typeof Promise !== "undefined" && Promise) === "function" ? _l : Object)
], InvoicesApiController.prototype, "getInvoiceByInvoiceNumber", null);
tslib_1.__decorate([
    (0, common_1.Post)('getInvoiceByCaseNumber'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_m = typeof _cms_models_1.GetInvoicesByCaseNumberRequest !== "undefined" && _cms_models_1.GetInvoicesByCaseNumberRequest) === "function" ? _m : Object]),
    tslib_1.__metadata("design:returntype", typeof (_o = typeof Promise !== "undefined" && Promise) === "function" ? _o : Object)
], InvoicesApiController.prototype, "getInvoiceByCaseNumber", null);
exports.InvoicesApiController = InvoicesApiController = tslib_1.__decorate([
    (0, swagger_1.ApiTags)("invoices"),
    (0, common_1.Controller)('invoices'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_invoices_service_1.InvoicesService !== "undefined" && _cms_invoices_service_1.InvoicesService) === "function" ? _a : Object])
], InvoicesApiController);


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(68), exports);
tslib_1.__exportStar(__webpack_require__(72), exports);


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesService = void 0;
const tslib_1 = __webpack_require__(4);
const _cms_invoices_repository_1 = __webpack_require__(69);
const common_1 = __webpack_require__(1);
const jwt_1 = __webpack_require__(17);
let InvoicesService = class InvoicesService {
    constructor(invoiceRepository, jwtService) {
        this.invoiceRepository = invoiceRepository;
        this.jwtService = jwtService;
    }
    async AddInvoice(invoice) {
        if (!this.ValidateInvoice(invoice))
            return null;
        common_1.Logger.log(invoice);
        return await this.invoiceRepository.AddInvoice(invoice);
    }
    async EditInvoice(invoice) {
        if (!this.ValidateInvoice(invoice))
            return null;
        return await this.invoiceRepository.EditInvoice(invoice);
    }
    async GetInvoiceById(id, accessToken) {
        if (accessToken === "" || id === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.GetInvoiceById(id, user.userId);
    }
    async GetInvoiceByInvoiceNumber(invoiceNumber, accessToken) {
        if (accessToken === "" || invoiceNumber === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.GetInvoiceByInvoiceNumber(invoiceNumber, user.userId);
    }
    async GetInvoiceByCaseNumber(caseNumber, accessToken) {
        if (accessToken === "" || caseNumber === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.GetInvoiceByCaseNumber(caseNumber, user.userId);
    }
    async DeleteInvoice(id, accessToken) {
        if (id === "" || accessToken === "")
            return null;
        const user = this.jwtService.decode(accessToken);
        return this.invoiceRepository.DeleteInvoice(id, user.userId);
    }
    ValidateInvoice(invoice) {
        if (invoice === null)
            return false;
        if (invoice.caseNumber === "")
            return false;
        if (invoice.name === "")
            return false;
        if (invoice.hours === 0)
            return false;
        if (invoice.date === null)
            return false;
        if (invoice.userId === "")
            return false;
        return true;
    }
};
exports.InvoicesService = InvoicesService;
exports.InvoicesService = InvoicesService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof _cms_invoices_repository_1.InvoicesRespository !== "undefined" && _cms_invoices_repository_1.InvoicesRespository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], InvoicesService);


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(4);
tslib_1.__exportStar(__webpack_require__(70), exports);
tslib_1.__exportStar(__webpack_require__(71), exports);


/***/ }),
/* 70 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesRepositoryModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
let InvoicesRepositoryModule = class InvoicesRepositoryModule {
};
exports.InvoicesRepositoryModule = InvoicesRepositoryModule;
exports.InvoicesRepositoryModule = InvoicesRepositoryModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        exports: [],
        imports: []
    })
], InvoicesRepositoryModule);


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesRespository = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const client_1 = __webpack_require__(16);
let InvoicesRespository = class InvoicesRespository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async AddInvoice(invoice) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.create({
            data: {
                caseNumber: invoice.caseNumber,
                costPerHour: invoice.costPerHour,
                date: invoice.date,
                hours: invoice.hours,
                name: invoice.name,
                userId: invoice.userId,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async EditInvoice(invoice) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.update({
            where: {
                id: invoice.id
            },
            data: {
                costPerHour: invoice.costPerHour,
                date: invoice.date,
                hours: invoice.hours,
                name: invoice.name,
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetInvoiceById(id, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.findUnique({
            where: {
                id: id,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetInvoiceByInvoiceNumber(invoiceNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.findMany({
            where: {
                invoiceNumber: invoiceNumber,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async GetInvoiceByCaseNumber(caseNumber, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.findMany({
            where: {
                caseNumber: caseNumber,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
    async DeleteInvoice(id, userId) {
        this.prisma.$connect();
        const result = await this.prisma.invoiceItems.delete({
            where: {
                id: id,
                userId: userId
            }
        });
        this.prisma.$disconnect();
        return result;
    }
};
exports.InvoicesRespository = InvoicesRespository;
exports.InvoicesRespository = InvoicesRespository = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof client_1.PrismaClient !== "undefined" && client_1.PrismaClient) === "function" ? _a : Object])
], InvoicesRespository);


/***/ }),
/* 72 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesServiceModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const invoices_service_service_1 = __webpack_require__(68);
const _cms_invoices_repository_1 = __webpack_require__(69);
let InvoicesServiceModule = class InvoicesServiceModule {
};
exports.InvoicesServiceModule = InvoicesServiceModule;
exports.InvoicesServiceModule = InvoicesServiceModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [invoices_service_service_1.InvoicesService, _cms_invoices_repository_1.InvoicesRepositoryModule],
        exports: [invoices_service_service_1.InvoicesService],
        imports: [_cms_invoices_repository_1.InvoicesRepositoryModule]
    })
], InvoicesServiceModule);


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesApiModule = void 0;
const tslib_1 = __webpack_require__(4);
const common_1 = __webpack_require__(1);
const invoices_api_controller_1 = __webpack_require__(66);
const _cms_invoices_service_1 = __webpack_require__(67);
const _cms_invoices_repository_1 = __webpack_require__(69);
const jwt_1 = __webpack_require__(17);
const client_1 = __webpack_require__(16);
let InvoicesApiModule = class InvoicesApiModule {
};
exports.InvoicesApiModule = InvoicesApiModule;
exports.InvoicesApiModule = InvoicesApiModule = tslib_1.__decorate([
    (0, common_1.Module)({
        controllers: [invoices_api_controller_1.InvoicesApiController],
        providers: [_cms_invoices_service_1.InvoicesService, _cms_invoices_repository_1.InvoicesRespository, jwt_1.JwtModule, client_1.PrismaClient],
        exports: [],
        imports: []
    })
], InvoicesApiModule);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(1);
const core_1 = __webpack_require__(2);
const app_module_1 = __webpack_require__(3);
const swagger_1 = __webpack_require__(23);
async function bootstrap() {
    //Create application
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    //Set global api prefix
    const globalPrefix = 'api';
    app.setGlobalPrefix(globalPrefix);
    //Enable cors
    app.enableCors();
    // Add payload size limit
    app.useBodyParser('json', { limit: '10mb' });
    //Add Swagger
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Case-Management-System')
        .setDescription('API for CMS')
        .setVersion('1.0')
        .addTag('cms')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    //Assign and listen to port
    const port = process.env.PORT || 3000;
    await app.listen(port);
    common_1.Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}
bootstrap();

})();

/******/ })()
;