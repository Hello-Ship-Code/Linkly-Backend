import type { RequestHandler } from 'express'

import { getUrlsControllers } from '../../urls/services/getUrls'

import HttpError from '../../../utils/error-handlers/HttpError'

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
