const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const database = require('knex')(config)


function createEat(eat, db = database) {
    return db('eat').insert('eat')
        .then(ids => {
            return ids[0]
        })
}

module.exports = {
    createEat,
}