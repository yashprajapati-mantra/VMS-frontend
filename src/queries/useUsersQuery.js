import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../pages/dashboard/Dashboard.controller';

export function useUsersQuery() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: 1000 * 60 * 5, // cache for 5 min
  });
}
