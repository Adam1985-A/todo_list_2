import "reflect-metadata"
import {DataSource} from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "saidat1985",
  database: "todo-list 2",
  synchronize: true,
  logging: false, 
  entities: [__dirname + "/../entities/*.js"],
  migration: [],
  subscribers: [],

  
});
export default AppDataSource;