import { appController } from './controllers/app.controller.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { config } from './config.js';
import express from 'express';
import cors from 'cors';

const app = express();
const { port } = config;

(async () => {
  app.use(cors());
  app.use(appController);
  app.use(errorMiddleware);

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
})();
