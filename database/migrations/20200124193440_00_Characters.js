
exports.up = function(knex) {
  return knex.schema.createTable('characters', characters=> {
      characters.increments();

      characters
      .string('name',128)
      .notNullable()
      .unique()

      characters
      .string('gender', 128)
      .notNullable()

      characters
      .string('imageurl', 128)
      .notNullable()

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('characters');
};
