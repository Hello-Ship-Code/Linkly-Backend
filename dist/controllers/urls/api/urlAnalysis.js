"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlAnalysis = void 0;
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const urlsAnalytics_1 = require("../services/urlsAnalytics");
const urlAnalysis = async (req, res, next) => {
    try {
        const shortId = req.params.shortId;
        if (!shortId) {
            res.redirect('/user');
        }
        const result = await (0, urlsAnalytics_1.getUrlByIdController)(shortId);
        res.redirect(result.redirectUrl);
    }
    catch (error) {
        next(new HttpError_1.default(`${error}`, 404));
    }
};
exports.urlAnalysis = urlAnalysis;
//# sourceMappingURL=urlAnalysis.js.map