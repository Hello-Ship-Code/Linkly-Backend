"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
const userSignupValidation_1 = require("../../../Validation/userValidation/userSignupValidation");
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const signUpUser_1 = require("../services/signUpUser");
const signupController = (req, res, next) => {
    try {
        const { userName, email, password } = userSignupValidation_1.userValidation.parse(req.body);
        if (!userName || !password || !email) {
            res.redirect('/signup');
            return next(new HttpError_1.default('data not found', 404));
        }
        (0, signUpUser_1.signUpUser)({ userName, email, password });
        res.redirect('/login');
    }
    catch (error) {
        return next(new HttpError_1.default(`${error}`, 409));
    }
};
exports.signupController = signupController;
//# sourceMappingURL=signup.controller.js.map