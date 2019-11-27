const express = require('express')
const helmet = require('helmet')
const next = require('next')
const path = require('path')

// Controller imports
const catController = require(path.resolve('server/controllers/cats-controller.js'))

const port = 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()
    server.use(helmet())

    server.set('view engine', 'ejs')
    server.use("/scripts", express.static(path.join(__dirname, '..', 'client-assets')));

    server.get('/', (_, res) => {
      res.redirect('/events/devfest-2019-11-30')
    })

    server.get('/cats', catController.index)
    server.get('/cats/:id', catController.show)

    server.get('/heartbeat', (_, res) => {
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