const express = require('express')
const server = express()

const eatRoutes = require('./routes/eat')

server.use(express.static('public'))
server.use(express.json())

server.use('/api/v1/eat', eatRoutes)

module.exports = server