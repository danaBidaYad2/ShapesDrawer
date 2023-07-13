import { randomElemFromArr } from '../utils/random.js';

export class ShapesService {
  shapes = ['line', 'triangle', 'rectangle', 'circle'];

  getShape = async () => {
    console.log('getShape called');
    return randomElemFromArr(this.shapes);
  };
}
