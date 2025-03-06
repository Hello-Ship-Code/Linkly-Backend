import type { RequestHandler } from 'express'

export const uploadController: RequestHandler = (req, res, _next) => {
  console.log(req.body)
  console.log(req.file)
  return res.redirect('/user')
}
