import type { RequestHandler, NextFunction, Request, Response } from 'express'

import { getUrlsControllers } from './urls/getUrlsController'
import { loginUser, signUpUserController } from './users/postUserController'
import { userValidation } from '../Validation/userValidation/userSignupValidation'

import HttpError from '../utils/error-handlers/HttpError'
import { setUser } from '../utils/JWT/auth'

export const profileViewController: RequestHandler = async (_, res, next) => {
  try {
    const userId = res.locals.user?.id

    if (!userId) return res.render('redirect', { path: '/login' })

    const urls = (await getUrlsControllers(userId)) || []
    res.render('user', { urls })
  } catch (error) {
    return next(new HttpError(`${error}`, 409))
  }
}

export const homeViewController = (_req: Request, res: Response, _next: NextFunction) => {
  res.render('home')
}

export const loginViewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Handle GET request separately
    if (req.method === 'GET') {
      return res.render('login') // ✅ Stops further execution
    }
  } catch (error) {
    next(new HttpError(`${error}`, 506))
  }
}

export const loginController: RequestHandler = async (req, res, _next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      res.redirect('/login')
      return
    }

    const user = await loginUser({ email, password })

    if (!user) {
      res.redirect('/login')
      return
    }

    res.cookie('uuid', setUser(user))

    res.render('redirect', { path: '/user' })
    return
  } catch (error) {
    console.log('error:', error)
    res.json({ error })
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