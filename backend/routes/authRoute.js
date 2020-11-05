import express from 'express'
import validate from 'express-validation'

import { authenticate } from '../controllers/authController.js'
import authSchema from './validation/authRouteValidation.js'

// defines responses for requests for the '/api/login' route
const router = express.Router()

router.route('/').post(validate(authSchema.authUser), authenticate)
router.param('authUser', validate(authSchema.authUser))

export default router
