"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationRepositoryModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const authetication_repostiory_1 = require("./authetication-repostiory");
const client_1 = require("@prisma/client");
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
//# sourceMappingURL=authentication-repository.module.js.map