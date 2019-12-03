const express = require('express')
const router = express.Router()

const db = require('../db/nappy')
const { getTokenDecoder } = require('authenticare/server')
const tokenDecoder = getTokenDecoder(false)

router.get('/', tokenDecoder, async (req, res) => {
    db.getNappies()
        .then(nappy => {
            res.json(nappy)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})


router.post('/', tokenDecoder, async (req, res) => {
    const nappy = req.body
    db.createNappy(nappy)
        .then(id => {
            res.json({ id: id })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

router.post('/delete', tokenDecoder, async (req, res) => {
    db.deleteNappy(req.body.nappyId)
        .then(id => {
            res.json({ id: id })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

module.exports = router