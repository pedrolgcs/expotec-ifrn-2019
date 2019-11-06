import { Router } from 'express';
import ContactController from './app/controllers/ContactController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'expotec 2019' }));

routes.get('/contacts', ContactController.index);
routes.post('/contacts', ContactController.store);
routes.get('/contacts/:id', ContactController.show);
routes.delete('/contacts/:id', ContactController.delete);

export default routes;
