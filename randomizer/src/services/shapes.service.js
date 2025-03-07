import { randomElemFromArr } from '../utils/random.js';
import shapes from '../db/shapes/shapes.json' with { type: "json" };
export class ShapesService {
  getShape = () => {
    return randomElemFromArr(shapes);
  };
}
