"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUrlByIdController = void 0;
const db_config_1 = require("../../../config/db.config");
const getUrlByIdController = async (shortId) => {
    return await db_config_1.prisma.url.update({
        where: { shortId },
        data: {
            visitHistory: {
                create: [{ timestamp: new Date() }],
            },
        },
    });
};
exports.getUrlByIdController = getUrlByIdController;
//# sourceMappingURL=urlsAnalytics.js.map