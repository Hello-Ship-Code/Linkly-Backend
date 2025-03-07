"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (error, _req, res, _next) => {
    const statusCode = Number(error.statusCode) || 500; // ✅ Ensure primitive number
    const message = error.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
        error: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=error.handler.js.map