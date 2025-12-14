import { TodoService } from "../service/todo.service";

export class TodoController {
  constructor() {
    this.service = new TodoService();

    this.getAllTodos = this.getAllTodos.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async getAllTodos(req, res) {
    try {
      const todos = await this.service.getTodos();
      return res.status(200).json(todos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async create(req, res) {
    try {
      const payload = {...req.body};
      const newTodo = await this.service.createTodo(payload);
      return res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const updatedTodo = await this.service.updateTodo(id, req.body);
      if(updatedTodo){
      return res.status(200).json(updatedTodo);
    }else{
      res.status(404).json({ message: 'Todo not found' });
    }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const deletedTodo = await this.service.deleteTodo(id);
      if(deletedTodo){
        return res.status(200).json({ message: 'Todo deleted successfully' });
      }
     
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

