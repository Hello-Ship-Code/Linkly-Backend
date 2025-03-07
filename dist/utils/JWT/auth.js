"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.setUser = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = require("../../config/env.config");
const setUser = (user) => jsonwebtoken_1.default.sign({ id: user.id, userName: user.userName, email: user.email }, env_config_1.env.JWT_SECRET);
exports.setUser = setUser;
const getUser = (token) => {
    try {
        if (!token)
            return null;
        const decode = jsonwebtoken_1.default.verify(token, env_config_1.env.JWT_SECRET);
        if (decode && typeof decode === 'object' && 'id' in decode) {
            return decode;
        }
        return null;
    }
    catch (_) {
        return null;
    }
};
exports.getUser = getUser;
//# sourceMappingURL=auth.js.map