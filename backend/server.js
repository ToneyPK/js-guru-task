import express from 'express'
import bodyParser from 'body-parser'
import helmet from 'helmet'

import authRoute from './routes/authRoute.js'
import customerRoute from './routes/customerRoute.js'
import articlesRoute from './routes/sellingArticlesRoute.js'

import { PORT } from './config/config.js'

const app = express()

app.use(bodyParser.json())
app.use(helmet())

app.use('/api/login', authRoute)
app.use('/api/customer', customerRoute)
app.use('/api/articles', articlesRoute)

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`)
})
