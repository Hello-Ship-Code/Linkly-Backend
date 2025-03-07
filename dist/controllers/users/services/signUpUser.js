"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = void 0;
const db_config_1 = require("../../../config/db.config");
const passwordHashing_1 = require("../../../utils/user/passwordHashing");
const signUpUser = async (userData) => {
    try {
        const hashedPassword = await (0, passwordHashing_1.hashPassword)(userData.password);
        return db_config_1.prisma.user.create({
            data: {
                userName: userData.userName,
                email: userData.email,
                profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABbXr4i-QODqhy7tofHYmTYh05rYPktzacw&s',
                password: hashedPassword,
            },
        });
    }
    catch (error) {
        throw new Error(`Signup failed: ${error.message}`);
    }
};
exports.signUpUser = signUpUser;
//# sourceMappingURL=signUpUser.js.map