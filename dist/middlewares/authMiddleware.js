"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const auth_1 = require("../utils/JWT/auth");
const authMiddleware = (req, res, next) => {
    const token = req.cookies?.uuid;
    if (!token) {
        res.render('redirect', { path: '/login' });
        return;
    }
    const user = (0, auth_1.getUser)(token);
    if (!user) {
        res.render('redirect', { path: '/login' });
        return;
    }
    res.locals.user = user;
    next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map