import knex from 'knex';

const db = knex({
  client: 'postgres',
  connection: {
    host: 'db',
    user: 'postgres',
    password: 'postgres',
    database: 'tibia',
  },
});

export async function connection () {
  db.select('*').from('item')
  .then((item) => {
    console.log(item);
  });
}

export default db;