const express = require('express')
const router = express.Router()
const db = require('../db/eat')




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
    let time = new Date().toISOString()

    const newEat = {
        amount: req.body.amount,
        measurement: req.body.measurement,
        created_at: time
    }


    db.createEat(newEat)
        .then(id => {
            res.json({ id: id })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

module.exports = router