import { ShapesService } from '../services/shapes.service.js';
import express from 'express';

const shapesService = new ShapesService();

export const shapesController = express.Router();

shapesController.get('/', async (_, res) => {
  try {
    const shape = shapesService.getShape();
    res.status(200).send(shape);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
