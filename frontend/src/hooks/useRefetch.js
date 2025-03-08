import { useQueryClient } from '@tanstack/react-query';

export const useRefetchQuery = (queryKey) => {
  const queryClient = useQueryClient();
  return () => queryClient.refetchQueries({ queryKey });
};
