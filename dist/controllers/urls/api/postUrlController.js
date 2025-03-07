"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUrlController = void 0;
const urlPostValidation_1 = require("./../../../Validation/urlValidation/urlPostValidation");
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const postUrl_1 = require("../services/postUrl");
const postUrlController = async (req, res, next) => {
    try {
        const { redirectUrl } = urlPostValidation_1.postUrlSchema.parse(req.body);
        const userId = res.locals.user?.id;
        if (!redirectUrl) {
            res.redirect('/user');
        }
        if (!userId) {
            res.redirect('/login');
        }
        await (0, postUrl_1.postUrl)(redirectUrl, userId);
        res.redirect('/user');
    }
    catch (error) {
        next(new HttpError_1.default(`${error}`, 404));
    }
};
exports.postUrlController = postUrlController;
//# sourceMappingURL=postUrlController.js.map