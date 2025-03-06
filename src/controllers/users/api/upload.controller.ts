import type { RequestHandler } from 'express'

import HttpError from '../../../utils/error-handlers/HttpError'
import { uploadPicture } from '../services/uploadPicture'

export const uploadController: RequestHandler = (req, res, next) => {
  try {
    const userId = res.locals.user?.id
    const profilePicture = req.file?.filename

    uploadPicture(userId as string, profilePicture as string)

    return res.redirect('/user')
  } catch (error) {
    next(new HttpError(`${error}`, 404))
  }
}