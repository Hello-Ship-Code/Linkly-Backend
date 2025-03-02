import { prisma } from '../../../config/db.config'

export const getUrlByIdController = async (shortId: string) => {
  return await prisma.url.findUnique({
    where: { shortId },
    include: { VisitHistory: true },
  })
}
