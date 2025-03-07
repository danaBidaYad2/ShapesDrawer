import { ColorsService } from '../services/colors.service.js';
import express from 'express';

const colorsService = new ColorsService();

export const colorsController = express.Router();

colorsController.get('/', async (_, res) => {
  try {
    const color = colorsService.getColor();
    res.status(200).send(color);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
