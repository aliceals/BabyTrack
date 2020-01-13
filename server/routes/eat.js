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
    console.log(req.body)
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


router.post('/delete', (req, res) => {
    db.deleteEat(req.body.eatId)
        .then(id => {
            res.json({ id: id })
        })
        .catch(err => {
            console.error(err)
            res.status(500).json({ message: 'Something is broken' })
        })
})

// const { getTokenDecoder } = require('authenticare/server')
// const tokenDecoder = getTokenDecoder(false)

// router.get('/', tokenDecoder, async (req, res) => {
//     db.getEats()
//         .then(eat => {
//             res.json(eat)
//         })
//         .catch(err => {
//             console.log(err)
//             res.status(500).json({ message: 'Something is broken' })
//         })
// })


// router.post('/', tokenDecoder, async (req, res) => {
//     console.log(req.body)
//     const eat = req.body

//     db.createEat(eat)
//         .then(id => {
//             res.json({ id: id })
//         })
//         .catch(err => {
//             console.error(err)
//             res.status(500).json({ message: 'Something is broken' })
//         })
// })


// router.post('/delete', tokenDecoder, async (req, res) => {
//     db.deleteEat(req.body.eatId)
//         .then(id => {
//             res.json({ id: id })
//         })
//         .catch(err => {
//             console.error(err)
//             res.status(500).json({ message: 'Something is broken' })
//         })
// })


module.exports = router