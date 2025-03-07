"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = void 0;
const HttpError_1 = __importDefault(require("../../../utils/error-handlers/HttpError"));
const uploadPicture_1 = require("../services/uploadPicture");
const uploadController = (req, res, next) => {
    try {
        const userId = res.locals.user?.id;
        const profilePicture = req.file?.filename;
        // console.log(req.file) debugging 
        (0, uploadPicture_1.uploadPicture)(userId, profilePicture);
        return res.redirect('/user');
    }
    catch (error) {
        next(new HttpError_1.default(`${error}`, 404));
    }
};
exports.uploadController = uploadController;
//# sourceMappingURL=upload.controller.js.map