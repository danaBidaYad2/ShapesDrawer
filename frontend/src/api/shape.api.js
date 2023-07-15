import { config } from './config';
import axios from 'axios';

export const fetchShape = async () => {
  return await axios.get(`${config.serverBaseUrl}/shape`);
};
