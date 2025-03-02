import shortid from "shortid"

import { prisma } from "../../../config/db.config"

export const postUrl = async (redirectUrl) => {

  const shortId = shortid.generate()

  const urlData = prisma.url.create({
    data: {

    }
  })
}