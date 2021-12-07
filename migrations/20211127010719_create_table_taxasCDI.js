
exports.up = function(knex) {
    return knex.schema.createTable('taxasCDI', table => {
        table.increments('id').primary()
        table.string('type').notNull()
        table.datetime('date').notNull()
        table.float('tax').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('taxasCDI')
};
