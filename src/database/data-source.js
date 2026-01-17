import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
dotenv.config();
import TodoEntity from "../entity/todo.entity.js";
import UserEntity from "../entity/user.entity.js";

const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production"
   ? { rejectUnauthorized: false } 
   : false,
  host: "localhost",
  port: [5432, 10],
  username: "postgres",
  password: "saidat1985", 
  database: "todo_list_2",  
  synchronize: true,
  logging: false,
  entities: [TodoEntity, UserEntity],
  migrations: [],
  subscribers: [],
});

export default AppDataSource;
