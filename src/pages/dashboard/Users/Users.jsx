import { useEffect, useState } from "react";
import AddRoleForm from "../../../components/users/AddRoleForm";
import AddUserForm from "../../../components/users/AddUserForm";
import { TabOptions } from "../../../constants";
import { useRolesAndPermissionsQuery } from "../../../queries/useRolesAndPermissionsQuery";
import { useUsersQuery } from "../../../queries/useUsersQuery";
import { useUserStore } from "../../../store/usersStore";
import RolesTable from "./RolesTable";
import UsersHeader from "./UsersHeader";
import UsersTable from "./UsersTable";

const Users = () => {
    const [selectedTab, setSelectedTab] = useState(TabOptions[0].value);
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    const { data: usersRes, isLoading: userLoading, error: userError } = useUsersQuery();
    const { data: rolesRes, isLoading: rolesLoading, error: rolesError } =
        useRolesAndPermissionsQuery();

    const setUsers = useUserStore((state) => state.setUsers);
    const users = useUserStore((state) => state.users);

    useEffect(() => {
        if (usersRes) setUsers(usersRes);
    }, [usersRes, setUsers]);



    if (userLoading || rolesLoading) return <div>Loading...</div>;

    if (userError || rolesError) return <div>Error loading data</div>;



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
