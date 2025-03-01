import { type NextFunction, type Request, type Response } from 'express'

import HttpError from '../utils/error-handlers/HttpError'
import { getUser } from '../utils/JWT/auth'

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.uuid

  if (!token) {
    next(new HttpError('No token found, redirecting...', 409))
    res.redirect('/login')
  }

  const user = getUser(token)

  if (!user) {
    next(new HttpError('No user found', 404))
    res.redirect('/login')
  }

  res.locals.user = user

  next()
}
