exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('contacts', function (table) {
            table.increments();
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('telephone').notNullable();
            table.integer('user_id').unsigned().notNullable().references('id').inTable('users');

        })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('contacs')
};