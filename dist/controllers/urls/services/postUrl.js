"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUrl = void 0;
const shortid_1 = __importDefault(require("shortid"));
const db_config_1 = require("../../../config/db.config");
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const postUrl = async (redirectUrl, userId) => {
    try {
        if (!redirectUrl) {
            throw new HttpError_1.default('URL not found', 400); // 400 is better for validation errors
        }
        if (!userId) {
            throw new HttpError_1.default('User ID is required', 400);
        }
        const shortId = shortid_1.default.generate();
        const newUrl = await db_config_1.prisma.url.create({
            data: {
                shortId,
                userId,
                redirectUrl,
            },
            include: {
                visitHistory: true, // Fixed capitalization
            },
        });
        return newUrl; // Returning the created URL for better use in controllers
    }
    catch (error) {
        console.error('Error creating short URL:', error); // Log for debugging
        throw new HttpError_1.default('Failed to create URL', 500); // Use a general 500 error
    }
};
exports.postUrl = postUrl;
//# sourceMappingURL=postUrl.js.map