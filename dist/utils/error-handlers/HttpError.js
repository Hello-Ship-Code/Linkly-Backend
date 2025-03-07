"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpError extends Error {
    statusCode;
    constructor(message, statusCode) {
        super(message);
        this.statusCode = Number(statusCode); // Ensure it's a primitive number
        // Set prototype explicitly to support instanceof checks
        Object.setPrototypeOf(this, HttpError.prototype);
    }
    static from(message, status) {
        return new HttpError(message, Number(status)); // Ensure primitive type
    }
}
exports.default = HttpError;
//# sourceMappingURL=HttpError.js.map