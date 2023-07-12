import { config } from '../config.js';
import express from 'express';
import { appController } from './controllers/app.controller.js';
import cors from 'cors';

const app = express();
const { port } = config;

(async () => {
  app.use(cors());
  app.use(appController);

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
})();
