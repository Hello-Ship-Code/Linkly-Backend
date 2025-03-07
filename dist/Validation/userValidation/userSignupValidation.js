"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const zod_1 = __importDefault(require("zod"));
exports.userValidation = zod_1.default.object({
    userName: zod_1.default.string().min(4, 'userName should be at least 5 characters'),
    email: zod_1.default.string().email('Invalid email format'),
    password: zod_1.default
        .string()
        .min(4, 'password should be at least 4 characters')
        .max(32, 'password should not exceed 32 characters')
        .regex(/[A-Z]/, 'Password should contain at least one upper case letter')
        .regex(/[a-z]/, 'Password should contain at least one lower case letter')
        .regex(/[0-9]/, 'Password should contain at least one number')
        .regex(/[A-Za-z0-9]/, 'Password should contain at least special character')
        .regex(/^\S*$/, 'Password cannot contain spaces'),
});
//# sourceMappingURL=userSignupValidation.js.map