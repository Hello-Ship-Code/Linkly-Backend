import { prisma } from "../../config/db.config";

import { hashPassword } from "../../utils/user/passwordHashing";
import { type signupUserData, type loginUserData } from "../../utils/user/userResponse";
import { verifyPassword } from './../../utils/user/passwordHashing';

export const signUpUserController = async (userData: signupUserData) => {
  try {
    const hashedPassword = await hashPassword(userData.password);

    return prisma.user.create({
      data: {
        userName: userData.userName,
        email: userData.email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    throw new Error(`Signup failed: ${(error as Error).message}`);
  }
}

export const loginUserController = async (userData: loginUserData) => {
  const user = prisma.user.findFirst({
    where: { email: userData.email }
  })

  if (!user) {
  }

}