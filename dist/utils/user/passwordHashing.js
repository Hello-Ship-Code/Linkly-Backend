"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const env_config_1 = require("../../config/env.config");
const hashPassword = async (password) => {
    return await bcrypt_1.default.hash(password, env_config_1.env.SALTROUNDS);
};
exports.hashPassword = hashPassword;
const verifyPassword = async (password, hashedPassword) => {
    return await bcrypt_1.default.compare(password, hashedPassword);
};
exports.verifyPassword = verifyPassword;
//# sourceMappingURL=passwordHashing.js.map