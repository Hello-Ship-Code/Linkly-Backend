import { prisma } from '../../config/db.config'

export const getUrlsControllers = async (userId: string) => {
  return await prisma.url.findMany({
    where: { userId },
    include: { VisitHistory: true },
  })
}

export const getUrlByIdController = async (shortId: string) => {
  return await prisma.url.findUnique({
    where: { shortId },
    include: { VisitHistory: true },
  })
}
