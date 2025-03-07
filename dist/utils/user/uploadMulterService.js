"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
// import fs from "fs";
const multer_1 = __importDefault(require("multer"));
const index_1 = require("../../index");
const storage = multer_1.default.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, index_1.uploadsPath);
    },
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});
exports.upload = (0, multer_1.default)({ storage });
//# sourceMappingURL=uploadMulterService.js.map