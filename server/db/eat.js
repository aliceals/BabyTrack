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

function deleteEat(eatId, db = database) {
    return db('eat').where('eat_id', eatId).del()
}

module.exports = {
    createEat,
    getEats,
    deleteEat
}