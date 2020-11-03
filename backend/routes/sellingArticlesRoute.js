import express from 'express'
import jsonWebToken from 'jsonwebtoken'
import { SECRET_KEY } from '../config/config.js'

import sellingArticlesJson from '../db/sellingArticles.js'
import tokenVerification from '../middleware/tokenVerification.js'

const router = express.Router()

router.get('/', tokenVerification, (req, res) => {
  jsonWebToken.verify(req.token, SECRET_KEY, (err, authData) => {
    if (err) res.sendStatus(403)
    else res.send(sellingArticlesJson)
  })
})

export default router
