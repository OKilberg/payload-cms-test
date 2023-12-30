import express from 'express'
import payload from 'payload'
import path from 'path';

require('dotenv').config()
const app = express()
// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Add your own express routes here

  const port = process.env.PORT || 3000;

  app.listen(port, "0.0.0.0")
}

start()
