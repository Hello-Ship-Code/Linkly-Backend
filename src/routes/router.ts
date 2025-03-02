import { Router, type Express, type Response } from 'express'

import { postUrlController } from '../controllers/urls/api/postUrlController'
import { loginController } from '../controllers/users/api/login.controller'
import { signupController } from '../controllers/users/api/signup.controller'
import { homeViewController } from '../controllers/users/views/home-view.controller'
import { loginViewController } from '../controllers/users/views/login-view.controller'
import { profileViewController } from '../controllers/users/views/profile-view.controller'
import { signupViewController } from '../controllers/users/views/signup-view.controller'
import { authMiddleware } from '../middlewares/authMiddleware'

import { errorHandler } from '../utils/error-handlers/error.handler'

const protectedRoutes = Router()

protectedRoutes.get('/:id')
protectedRoutes.get('/', profileViewController)
protectedRoutes.post('/', postUrlController)

const apiRouter = Router()

apiRouter.post('/login', loginController)
apiRouter.post('/signup', signupController)

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