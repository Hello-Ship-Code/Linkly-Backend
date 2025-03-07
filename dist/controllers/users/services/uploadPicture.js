"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadPicture = void 0;
const db_config_1 = require("../../../config/db.config");
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const uploadPicture = async (userId, profilePicture) => {
    try {
        return await db_config_1.prisma.user.update({
            where: { id: userId },
            data: { profilePicture }
        });
    }
    catch (error) {
        throw new HttpError_1.default(`${error}`, 401);
    }
};
exports.uploadPicture = uploadPicture;
//# sourceMappingURL=uploadPicture.js.map