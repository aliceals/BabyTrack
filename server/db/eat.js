const database = require('./connection')


function getEats(db = database) {
    return db('eat').select()
}

function createEat(eat, db = database) {
    return db('eat').insert(eat)
        .then(ids => {
            return ids[0]
        })
}

module.exports = {
    createEat,
    getEats
}