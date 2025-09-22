import CustomTable from "../../../components/comman/CustomTable";

const UsersTable = ({ data }) => {
    const usersColumns = [
        { title: "FirstName", dataIndex: "firstName" },
        { title: "LastName", dataIndex: "lastName" },
        { title: "Email", dataIndex: "email" },
        { title: "Phone", dataIndex: "phone" },
    ];

    return (
        <CustomTable
            data={data}
            rowKey="id"
            columns={usersColumns}
            pagination={["topRight"]}
            isRowSelectionEnabled={true}
        >

        </CustomTable>
    );
};

export default UsersTable;
