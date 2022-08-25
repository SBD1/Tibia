const { Router } = require('express')

const routes = new Router();

routes.get('/health', (req, res) =>{
    res.send({message: 'Connect with sucess'})
})

module.exports = routes