'use strict'

import cors from 'cors'
import morgan from 'morgan'
import routes from './api/routes'
import subscribers from './subscribers'
import express from 'express'

async function startServer (port) {
  const app = express()

  app.use(cors())
  app.use(express.json())
  app.use(morgan('combined'))
  routes.load().forEach(r => {
    app.use(r.path, r.router)
  })

  const swaggerUi = require('swagger-ui-express')
  const swaggerDocument = require('./../swagger.json')

  subscribers.load()

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.use('/api-docs', swaggerUi.serve,
    swaggerUi.setup(swaggerDocument))

  app.listen(port, () =>
    console.log(`Listening port ${port}`)
  )
}

module.exports = {
  startServer
}
