const database = require('./connection')


function getNappies(db = database) {
    return db('nappy').select()
}

function createNappy(nappy, db = database) {
    return db('nappy').insert(nappy.type)
        .then(ids => {
            return ids[0]
        })
}

module.exports = {
    createNappy,
    getNappies
}