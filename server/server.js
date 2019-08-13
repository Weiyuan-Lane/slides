const express = require('express')
const helmet = require('helmet')
const next = require('next')

const port = 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(helmet())

    server.get('/heartbeat', (req, res) => {
      res.sendStatus(200)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log('[Info] Custom server ready on port ' + port)
    })
  })
  .catch(e => {
    console.log(e.stack)
    process.exit(1)
  })
