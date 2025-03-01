import { type Url, type User } from '@prisma/client'

declare global {
  namespace Express {
    interface Locals {
      User?: Omit<User, 'password', 'createdAt'>
      url: Url
    }
  }
}

export {}
