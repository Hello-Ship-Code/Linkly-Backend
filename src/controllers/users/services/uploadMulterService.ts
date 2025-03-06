// import fs from "fs";
import multer from 'multer'
import path from 'path'

const uploadDir = path.resolve(__dirname, '../../../../uploads')

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir)
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

export const upload = multer({ storage })
