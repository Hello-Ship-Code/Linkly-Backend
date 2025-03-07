"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUrlSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.postUrlSchema = zod_1.default.object({
    redirectUrl: zod_1.default.string().url('Invalid URL format'),
});
//# sourceMappingURL=urlPostValidation.js.map