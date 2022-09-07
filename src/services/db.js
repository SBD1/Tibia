const knex = require('knex')

module.exports = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'postgres',
    password: 'postgres',
    database: 'tibia',
  },
})