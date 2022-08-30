const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'tibia',
    password: 'postgres',
    port: 5435
});

module.exports = client;
