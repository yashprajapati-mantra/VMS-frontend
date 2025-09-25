import { useQuery } from "@tanstack/react-query";
import { fetchRolesAndPermissions } from "../api/roleApi";

export const useRolesAndPermissionsQuery = () => {
    return useQuery({
        queryKey: ["rolesAndPermissions"],
        queryFn: fetchRolesAndPermissions,
        staleTime: 1000 * 60 * 5, // cache for 5 min
    });
};