"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutheticationRepostiory = void 0;
const tslib_1 = require("tslib");
const client_1 = require("@prisma/client");
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
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
    tslib_1.__metadata("design:paramtypes", [client_1.PrismaClient])
], AutheticationRepostiory);
//# sourceMappingURL=authetication-repostiory.js.map