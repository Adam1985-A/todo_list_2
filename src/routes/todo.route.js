import express from 'express';
import authMiddleware from '../middleware/auth.middleware.js';
import { TodoController } from '../controller/todo.controller.js';

const routes = express.Router();
routes.use(authMiddleware);
const controller = new TodoController();

routes.get('/', authMiddleware, controller.getAllTodos);
routes.post('/', authMiddleware, controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete);

export default routes;