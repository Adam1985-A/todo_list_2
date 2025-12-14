import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "saidat1985", 
  database: "todo_list_2",  
  synchronize: true,
  logging: false,
  entities: ["src/entity/todo.entity.js"],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
