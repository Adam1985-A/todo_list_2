import express from 'express';
import { TodoController } from '../controller/todo.controller.js';

const routes = express.Router();
const controller = new TodoController();

routes.get('/todos', controller.getAllTodos);
routes.post('/todos', controller.create);
routes.put('/todos/:id', controller.update);
routes.delete('/todos/:id', controller.delete);

export default routes;