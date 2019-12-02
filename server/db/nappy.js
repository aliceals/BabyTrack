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

function deleteNappy(nappyId, db = database) {
    return db('nappy').where('nappy_id', nappyId).del()
}

module.exports = {
    createNappy,
    getNappies,
    deleteNappy
}