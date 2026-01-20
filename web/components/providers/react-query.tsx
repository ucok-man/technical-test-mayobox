import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
    },
  },
});

export const refetchNow = (querykey: string[]) => {
  querykey.forEach((key) => {
    queryClient.invalidateQueries({
      queryKey: [key],
    });
    queryClient.refetchQueries({
      queryKey: [key],
    });
  });
};
