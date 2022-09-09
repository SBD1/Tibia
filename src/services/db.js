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
  await db.select('*').from('item')
  .then((item) => {
    console.log(item);
  }).catch((error) => {
    console.log(error);
  });
}

export default db;