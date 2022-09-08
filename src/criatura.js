const db = require('./services/client')

async function listCriaturas(){

    await db.connect()
    var result
    result = await db.query('SELECT * FROM criatura')
    console.log("Criaturas:")
    console.log(result.rows);
}

listCriaturas()