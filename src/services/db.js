import knex from 'knex';
const Client = require('pg')

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

// getItens();

// async function getItens() {
//   try {
//     await db.connection()
//     const item = await db.client.query("select * from item") 
//     console.table(item. rows)
//   } catch ( error ) {
//     console.log("Ocorreu um erro no getItems. Erro: " + error)
//   } finally {
//     await db.end();
//   }

// }

export default db;