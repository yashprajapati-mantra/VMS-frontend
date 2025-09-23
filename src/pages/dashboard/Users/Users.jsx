import { useEffect, useState } from "react";
import { TabOptions } from "../../../constants";
import { useUsersQuery } from "../../../queries/useUsersQuery";
import { useRolesAndPermissionsQuery } from "../../../queries/useRolesAndPermissionsQuery";
import { useUserStore } from "../../../store/usersStore";
import UsersHeader from "./UsersHeader";
import UsersTable from "./UsersTable";
import RolesTable from "./RolesTable";
import AddUserForm from "../../../components/users/addUserForm";
import AddRoleForm from "../../../components/users/addRoleForm";

const Users = () => {
    const [selectedTab, setSelectedTab] = useState(TabOptions[0].value);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const { data: usersRes, isLoading, error } = useUsersQuery();
    const { data: rolesRes, isLoading: rolesLoading, error: rolesError } =
        useRolesAndPermissionsQuery();

    const setUsers = useUserStore((state) => state.setUsers);
    const users = useUserStore((state) => state.users);

    useEffect(() => {
        if (usersRes) setUsers(usersRes.users);
    }, [usersRes, setUsers]);



    if (isLoading || rolesLoading) return <div>Loading...</div>;

    if (error || rolesError) return <div>Error loading data</div>;

    return (
        <>
            <UsersHeader
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                onAddClick={() => setDrawerOpen(true)}
            />

            {selectedTab === "appUser" && <UsersTable data={users} />}
            {selectedTab === "rolesAndPermissions" && (
                <RolesTable data={rolesRes.posts} />
            )}

            {selectedTab === "appUser" ? (
                <AddUserForm open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
            ) : (
                <AddRoleForm open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
            )}
        </>
    );
};

export default Users;
