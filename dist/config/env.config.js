"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const env = {
    PORT: parseInt(process.env.PORT ?? '3000', 10),
    DATABASE_URL: process.env.DATABASE_URL ?? 'mongodb://127.0.0.1:27017',
    JWT_SECRET: process.env.JWT_SECRET ?? 'a-string-secret-at-least-256-bits-longs',
    SALTROUNDS: Number(process.env.SALTROUNDS ?? 10),
    NODE_ENV: process.env.NODE_ENV ?? 'production',
};
exports.env = env;
//# sourceMappingURL=env.config.js.map