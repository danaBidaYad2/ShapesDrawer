import { useQuery } from '@tanstack/react-query';
import { fetchColor } from '../api/color.api';

export const useColorData = async (customOptions) =>
  useQuery({
    queryKey: ['color'],
    queryFn: fetchColor,
    onError: (error) => console.log('failed to get color with err: ', error),
    ...customOptions,
  });
