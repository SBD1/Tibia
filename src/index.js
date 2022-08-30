const client = require('./services/client.js')

async function connect(){
    client.connect()
    const now = await client.query("SELECT NOW()")
    await client.end()

    return now()
}

connect()