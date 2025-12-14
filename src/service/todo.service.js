import AppDataSource from "../database/data-source.js";  
import { TodoEntity } from "../entity/todo.entity.js";

export class TodoService {
  constructor() {
    this.repository = AppDataSource.getRepository(TodoEntity);
  }
  async getTodos() {
    return this.repository.find();
  }
  async getTodoById(id) {
    return this.repository.findOneBy({
      where: {id: parseInt(id)} 
    });

    if(!todo){
    throw new Error('Todot found');
  }

return todo;
  }

  async createTodo(data) {
    const todo = this.repository.create(payload);
    return await this.repository.save(todo);
  }

  async updateTodo(id, payload) {
    const todo = await this.getTodoById(id);
   //merge the existing todo with payload

    Object.assign(todo, payload);
    return await this.repository.save(todo);
  }

  async deleteTodo(id) {
    const todo = await this.getTodoById(id);
    return await this.repository.remove(todo);

    return { message: 'Todo deleted successfully' };
  }
  
}