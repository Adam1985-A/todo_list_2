import AppDataSource from "../database/data-source.js";
import TodoEntity from "../entities/todo.entity.js";

export class TodoService {
  constructor() {
    this.Repository = AppDataSource.getRepository(TodoEntity);
  }
  async getTodos() {
   await this.Repository.find();
  }

  async getTodoById(id) {
    const todo = await this.Repository.findOne({ 
      where: {id: parseInt(id)} 
    });
    return todo;
  }

}
