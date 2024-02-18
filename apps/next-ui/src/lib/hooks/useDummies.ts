import { useQuery } from "@tanstack/react-query";
import { getDummiesAction } from "../actions";

export function useDummies() {
  return useQuery({
    queryKey: ['dummies'],
    queryFn: async () => getDummiesAction(),
  })
}
