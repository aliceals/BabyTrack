const express = require('express')
const server = express()

const eatRoutes = require('./routes/eat')
const nappyRoutes = require('./routes/nappy')

server.use(express.static('public'))
server.use(express.json())

server.use('/api/v1/eat', eatRoutes)
server.use('/api/v1/nappy', nappyRoutes)

module.exports = server