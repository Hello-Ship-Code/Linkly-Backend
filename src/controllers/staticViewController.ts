import { type NextFunction, type Request, type Response } from 'express'

import { getUrlsControllers } from './urls/getUrlsController'
import { loginUserController, signUpUserController } from './users/postUserController'
import { userValidation } from '../Validation/userValidation/userSignupValidation'

import HttpError from '../utils/error-handlers/HttpError'

export const profileViewController = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = res.locals.user?.Id

    if (!userId) {
      res.redirect('/login')
      return next(new HttpError('Unauthorized: User not found', 404))
    }

    const urls = (await getUrlsControllers(userId)) || []
    res.render('profile', { urls })
  } catch (error) {
    return next(new HttpError(`${error}`, 409))
  }
}

export const homeViewController = (_req: Request, res: Response, _next: NextFunction) => {
  res.render('home')
}

export const loginViewController = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.method === 'GET') {
      res.render('login')
    }
    const data = userValidation.parse(req.body)

    if (!data) {
      res.redirect('/signup')
      return next(new HttpError('data not found', 404))
    }

    loginUserController(data)

    res.redirect('/login')
  } catch (error) {
    return next(new HttpError(`${error}`, 409))
  }
}

export const signupViewController = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.method === 'GET') {
      res.render('signup')
    }
    const data = userValidation.parse(req.body)

    if (!data) {
      res.redirect('/signup')
      return next(new HttpError('data not found', 404))
    }

    signUpUserController(data)

    res.redirect('/login')
  } catch (error) {
    return next(new HttpError(`${error}`, 409))
  }
}
