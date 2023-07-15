import { useQuery } from '@tanstack/react-query';
import { fetchColor } from '../api/color.api';

export const useColorData = async (onSuccess, fetchOnCompMount) => {
  return useQuery({
    queryKey: ['color'],
    queryFn: fetchColor,
    refetchOnMount: fetchOnCompMount,
    // enabled: false,
    onSuccess,
    onError: (error) => console.log('failed to get color with err: ', error),
  });
};
