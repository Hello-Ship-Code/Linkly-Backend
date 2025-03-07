"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userViewController = void 0;
const getUrls_1 = require("../../urls/services/getUrls");
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const getUser_1 = require("../services/getUser");
const userViewController = async (_, res, next) => {
    try {
        const userId = res.locals.user?.id;
        if (!userId)
            return res.render('login');
        const urls = (await (0, getUrls_1.getUrlsControllers)(userId)) || [];
        const user = await (0, getUser_1.getUserById)(userId);
        res.render('user', { urls, user });
    }
    catch (error) {
        return next(new HttpError_1.default(`${error}`, 409));
    }
};
exports.userViewController = userViewController;
//# sourceMappingURL=user-view.controller.js.map