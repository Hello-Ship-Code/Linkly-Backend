import { prisma } from "../../config/db.config";

import HttpError from "../../utils/error-handlers/HttpError";
import { hashPassword, verifyPassword } from "../../utils/user/passwordHashing";
import { type signupUserData, type loginUserData } from "../../utils/user/userResponse";

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

export const loginUser = async (userData: loginUserData) => {

  const user = await prisma.user.findFirst({
    where: { email: userData.email }
  })

  if (!user) {
    throw new HttpError('user not found', 409)
  }

  const isMatch = await verifyPassword(userData.password, user.password)

  if (isMatch) {
    return user
  }

  throw new HttpError('user not found', 409)

}