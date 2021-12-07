
exports.up = function(knex) {
    return knex.schema.createTable('dadosCDB', table => {
        table.increments('id').primary()
        table.datetime('investmentDate').notNull()
        table.float('cdbRate').notNull()
        table.datetime('currentDate').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('dadosCDB')
};

