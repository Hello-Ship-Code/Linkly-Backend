"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const db_config_1 = require("../../../config/db.config");
const getUserById = async (userId) => {
    return await db_config_1.prisma.user.findFirst({
        where: { id: userId },
    });
};
exports.getUserById = getUserById;
//# sourceMappingURL=getUser.js.map