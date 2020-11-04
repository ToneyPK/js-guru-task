import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import expressValidation from 'express-validation'

import authRoute from './routes/authRoute.js'
import customerRoute from './routes/customerRoute.js'
import articlesRoute from './routes/sellingArticlesRoute.js'

import { PORT } from './config/config.js'

const app = express()

// parses request body
app.use(bodyParser.json())

// sets headers for better security
app.use(helmet())

// serves routes
app.use('/api/login', authRoute)
app.use('/api/customer', customerRoute)
app.use('/api/articles', articlesRoute)

// returns input/payload validation errors
app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    res.status(err.status).json(err)
  } else {
    res.status(500).json({
      status: err.status,
      message: err.message,
    })
  }
})

// starts the server on desired port
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
