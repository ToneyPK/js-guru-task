import express from 'express'
import jsonWebToken from 'jsonwebtoken'

import customerJson from '../db/customer.js'
import { SECRET_KEY } from '../config/config.js'

import tokenVerification from '../middleware/tokenVerification.js'

// defines responses for requests for the '/api/customer' route
const router = express.Router()

router.get('/', tokenVerification, (req, res) => {
  const secretKeyDecoded = Buffer.from(SECRET_KEY, 'base64')
  jsonWebToken.verify(req.token, secretKeyDecoded, (err, authData) => {
    if (err) res.sendStatus(403)
    else res.send(customerJson)
  })
})

export default router
