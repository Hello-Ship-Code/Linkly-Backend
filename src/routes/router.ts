import { Router, type Express, type Response } from 'express'

import {
  homeViewController,
  loginViewController,
  profileViewController,
  signupViewController,
} from '../controllers/staticViewController'
import { authMiddleware } from '../middlewares/authMiddleware'

import { errorHandler } from '../utils/error-handlers/error.handler'

const protectedRoutes = Router()

protectedRoutes.get('/:id')
protectedRoutes.get('/', profileViewController)
protectedRoutes.post('/', profileViewController)

const apiRouter = Router()

apiRouter.post('/login', loginViewController)
apiRouter.post('/signup', signupViewController)

const htmlRouter = Router()

htmlRouter.get('/login', loginViewController)
htmlRouter.get('/signup', signupViewController)
htmlRouter.get('/', homeViewController)

const appRouter = (app: Express) => {
  app.use('/user', authMiddleware, protectedRoutes)
  app.use('/api', apiRouter)
  app.use('/', htmlRouter)
  app.use(errorHandler)
  app.use((_, response: Response) => {
    response.status(403).send({ status: '403 Forbidden' })
    response.redirect('/')
  })
}

export { appRouter }
