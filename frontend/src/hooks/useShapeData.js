import { useQuery } from '@tanstack/react-query';
import { fetchShape } from '../api/shape.api';

export const useShapeData = async (onSuccess, fetchOnCompMount) => {
  return useQuery({
    queryKey: ['shape'],
    queryFn: fetchShape,
    refetchOnMount: fetchOnCompMount,
    // enabled: false,
    onSuccess,
    onError: (error) => console.log('failed to get shape with err: ', error),
  });
};
