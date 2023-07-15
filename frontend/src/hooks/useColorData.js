import { useQuery } from 'react-query';
import { fetchColor } from '../api/color.api';

export const useColorData = async (onSuccess, fetchOnCompMount) => {
  return useQuery('color', fetchColor, {
    enabled: fetchOnCompMount,
    onSuccess,
    onError: (error) => console.log('failed to get color with err: ', error),
  });
};
