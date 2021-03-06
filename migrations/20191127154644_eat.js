
exports.up = function (knex) {
    return knex.schema.createTable('eat', (table) => {
        table.increments('eat_id').primary()
        table.integer('amount')
        table.string('measurement')
        table.dateTime('created_at').defaultTo(new Date().toISOString())
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('eat')
};
