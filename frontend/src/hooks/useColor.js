import { useQuery } from '@tanstack/react-query';
import { fetchColor } from '../api/color.api';
import { useRefetchQuery } from './useRefetch';

const queryKey = ['color'];

export const useColor = async (customOptions) =>
  useQuery({
    queryKey: ['color'],
    queryFn: fetchColor,
    onError: (error) => console.log('failed to get color with err: ', error),
    ...customOptions,
  });

export const useColorRefetch = () => useRefetchQuery(queryKey);
