import { randomElemFromArr } from '../utils/random.js';
import colors from '../db/colors/colors.json' with { type: "json" };
export class ColorsService {
  getColor = () => {
    return randomElemFromArr(colors);
  };
}
