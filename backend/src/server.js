const app = require('./app');

const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Servidor online no http://localhost:${PORT}`);
})
