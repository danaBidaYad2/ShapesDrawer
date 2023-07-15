import { useQuery } from 'react-query';
import { fetchShape } from '../api/shape.api';

export const useShapeData = async (onSuccess, fetchOnCompMount) => {
  return useQuery('shape', fetchShape, {
    enabled: fetchOnCompMount,
    onSuccess,
    onError: (error) => console.log('failed to get color with err: ', error),
  });
};
