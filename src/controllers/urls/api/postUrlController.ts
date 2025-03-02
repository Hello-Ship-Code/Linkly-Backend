import type { RequestHandler } from 'express'

import { postUrlSchema } from './../../../Validation/urlValidation/urlPostValidation';

import HttpError from '../../../utils/error-handlers/HttpError'
import { postUrl } from '../services/postUrl'

export const postUrlController: RequestHandler = async (req, res, next) => {
  try {
    const { redirectUrl } = postUrlSchema.parse(req.body)

    if (!redirectUrl) {
      res.render('render', { path: '/user' })
    }

    postUrl(redirectUrl)

  } catch (error) {
    next(new HttpError(`${error}`, 404))
  }
}