const express = require('express')
const router = express.Router()

const db = require('../db/tracker')


router.get('/', (req, res) => {
    db.getEats()
        .then(eat => {
            res.json(eat)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})


router.post('/', (req, res) => {
    const eat = req.body
    db.createEat(eat)
        .then(id => {
            res.json({ id: id })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

module.exports = router