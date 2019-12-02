const express = require('express')
const router = express.Router()

const db = require('../db/sleep')


router.get('/', (req, res) => {
    db.getSleeps()
        .then(sleep => {
            res.json(sleep)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})


router.post('/', (req, res) => {
    const sleep = req.body
    db.createSleep(sleep)
        .then(id => {
            res.json({ id: id })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

router.post('/delete', (req, res) => {
    db.deleteSleeps(req.body.sleepId)
        .then(id => {
            res.json({ id: id })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

module.exports = router