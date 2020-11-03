import express from 'express'
import customer from '../db/customer.js'
import customerJson from '../db/customer.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.send(customerJson)
})

export default router
