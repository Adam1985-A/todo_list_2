import express from "typeorm";
import AppDataSource from "./database/data-source"; 
import routes from "./routes/todo.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/todos", routes);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});