import type { RequestHandler } from 'express'

import { getUser } from '../utils/JWT/auth'

export const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.cookies?.uuid

  console.log(token)

  if (!token) {
    res.redirect('/login')
    return
  }

  const user = getUser(token)

  console.log(user)

  if (!user) {
    res.redirect('/login')
    return
  }

  res.locals.user = user

  next()
}