import { Router } from 'express';

const routes = new Router();

routes.get('/health', (req, res) =>{
    res.send({message: 'Connect with sucess'})
})

export default routes