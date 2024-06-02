"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelsModule = void 0;
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const user_1 = require("./user/user");
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
//# sourceMappingURL=models.module.js.map