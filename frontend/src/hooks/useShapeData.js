import { useQuery } from '@tanstack/react-query';
import { fetchShape } from '../api/shape.api';

export const useShapeData = async (customOptions) =>
  useQuery({
    queryKey: ['shape'],
    queryFn: fetchShape,
    onError: (error) => console.log('failed to get shape with err: ', error),
    ...customOptions,
  });
