"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const auth_1 = require("../../../utils/JWT/auth");
const loginUser_1 = require("../services/loginUser");
const loginController = async (req, res, _next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.redirect('/login');
            return;
        }
        const user = await (0, loginUser_1.loginUser)({ email, password });
        if (!user) {
            res.redirect('/login');
            return;
        }
        res.cookie('uuid', (0, auth_1.setUser)(user));
        res.render('redirect', { path: '/user' });
        return;
    }
    catch (error) {
        console.log('error:', error);
        res.json({ error });
    }
};
exports.loginController = loginController;
//# sourceMappingURL=login.controller.js.map