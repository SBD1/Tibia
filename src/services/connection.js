import { Client } from 'pg'

const conection = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'tibia',
    password: 'postgres',
    port: 5435


});
 export default conection
