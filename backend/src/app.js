const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

const db = require('knex')({
    client: 'pg',
    connection: {
      host : 'db',
      port : 5433,
      user: 'postgres',
      password: 'postgres',
      database: 'tibia',
    },
});

app.use(cors());
app.use(bodyParser.json());

// let teste = db.select('*')
// .from('item');

app.get("/item", async (req, res) => {
    try {
      console.log("Acessei o banco!");
      const tibia = await db.select().from('item');
      res.status(200).json(tibia);
    } catch (error) {
      console.log("Super tomas");
      console.log("Deu ruim!!!");
      return res.status(400).json({ message: `Can't list pokemons: ${error}` });
    }
  });


module.exports = app;