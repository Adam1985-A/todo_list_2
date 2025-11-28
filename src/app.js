import express from 'express';
import AppDataSource from '../database/data-source.js';
import routes from '../routes/todo.routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/todos", routes);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  });

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
