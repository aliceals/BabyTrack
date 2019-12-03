const express = require('express')
const server = express()

const eatRoutes = require('./routes/eat')
const nappyRoutes = require('./routes/nappy')
const sleepRoutes = require('./routes/sleep')
const authRoutes = require('./routes/auth')

server.use(express.static('public'))
server.use(express.json())

server.use('/api/v1/eat', eatRoutes)
server.use('/api/v1/nappy', nappyRoutes)
server.use('/api/v1/sleep', sleepRoutes)
server.use('/api/v1', authRoutes)


module.exports = server