const database = require('./connection')


function getSleeps(db = database) {
    return db('sleep').select()
}

function createSleep(sleep, db = database) {
    console.log(sleep)
    return db('sleep').insert(sleep)
        .then(ids => {
            return ids[0]
        })
}

module.exports = {
    createSleep,
    getSleeps
}