"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginViewController = void 0;
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const loginViewController = async (_req, res, next) => {
    try {
        res.render('login');
    }
    catch (error) {
        next(new HttpError_1.default(`${error}`, 506));
    }
};
exports.loginViewController = loginViewController;
//# sourceMappingURL=login-view.controller.js.map