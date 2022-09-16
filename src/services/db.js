import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'tibia',
  },
});

export default db;