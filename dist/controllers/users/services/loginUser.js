"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const db_config_1 = require("../../../config/db.config");
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const passwordHashing_1 = require("../../../utils/user/passwordHashing");
const loginUser = async (userData) => {
    const user = await db_config_1.prisma.user.findFirst({
        where: { email: userData.email },
    });
    if (!user) {
        throw new HttpError_1.default('user not found', 409);
    }
    const isMatch = await (0, passwordHashing_1.verifyPassword)(userData.password, user.password);
    if (isMatch) {
        return user;
    }
    throw new HttpError_1.default('user not found', 409);
};
exports.loginUser = loginUser;
//# sourceMappingURL=loginUser.js.map