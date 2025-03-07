"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlsControllers = void 0;
const db_config_1 = require("../../../config/db.config");
const getUrlsControllers = async (userId) => {
    return await db_config_1.prisma.url.findMany({
        where: { userId },
        include: { visitHistory: true },
    });
};
exports.getUrlsControllers = getUrlsControllers;
//# sourceMappingURL=getUrls.js.map