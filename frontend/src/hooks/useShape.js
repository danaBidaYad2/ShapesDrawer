import { useQuery } from '@tanstack/react-query';
import { fetchShape } from '../api/shape.api';
import { useRefetchQuery } from './useRefetch';

const queryKey = ['shape'];

export const useShape = async (customOptions) =>
  useQuery({
    queryKey,
    queryFn: fetchShape,
    onError: (error) => console.log('failed to get shape with err: ', error),
    ...customOptions,
  });

export const useShapeRefetch = () => useRefetchQuery(queryKey);
