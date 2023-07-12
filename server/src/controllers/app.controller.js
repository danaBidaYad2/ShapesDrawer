import express from 'express';
import { config } from '../../config.js';

import { colorsController } from './colors.controller.js';
import { shapesController } from './shapes.controller.js';

export const appController = express.Router();

const { apiVersion } = config;

const baseRoute = `/api/${apiVersion}`;

const baseRoutes = {
  color: `${baseRoute}/color`,
  shape: `${baseRoute}/shape`,
};

appController.use(baseRoutes.color, colorsController);
appController.use(baseRoutes.shape, shapesController);
