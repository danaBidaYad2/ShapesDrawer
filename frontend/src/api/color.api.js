import { config } from './config';
import axios from 'axios';

export const fetchColor = async () => {
  return await axios.get(`${config.serverBaseUrl}/color`);
};
