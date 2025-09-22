import { Button, Input, Select, Space, Pagination, Switch } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import CustomTable from "../../../components/comman/CustomTable";
import { permissionData } from "../../../constants";
const { Search } = Input;

const UsersTable = ({ data }) => {
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // Memoize columns for performance
    const usersColumns = useMemo(() => [
        {
            title: "Full Name",
            key: "fullname",
            render: (_, record) => `${record.firstName} ${record.lastName}`,
        },
        { title: "Username", dataIndex: "username" },
        { title: "Email", dataIndex: "email" },
        { title: "Role", dataIndex: "role" },
        {
            title: "2FA", dataIndex: "twoFactorAuth",
            render: (enabled, record) => (
                <Switch
                    checked={enabled}
                    onChange={(checked) => {
                        // Handle toggle change
                        console.log("2FA for user", record.id, "is now", checked);
                        // You can update state or call API here
                    }}
                />
            ),
        },
        {
            title: "Actions",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        onClick={() => alert("Edit user: " + record.id)}
                        icon={<EditOutlined />}
                    >
                        Edit
                    </Button>
                    <Button
                        danger
                        onClick={() => alert("Delete user: " + record.id)}
                        icon={<DeleteOutlined />}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ], []);

    // Memoize paginated data for performance
    const paginatedData = useMemo(() =>
        data.slice((currentPage - 1) * pageSize, currentPage * pageSize),
        [data, currentPage, pageSize]
    );

    return (
        <div className="flex flex-col gap-4 mx-2">
            {/* --- Top Row: Search + Filters + Pagination --- */}
            <div className="flex items-center justify-between">
                <Search
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="!w-64"
                />
                <div className="flex items-center gap-3">
                    <Select placeholder="Date added" className="w-40">
                        <Select.Option value="recent">Recently Added</Select.Option>
                        <Select.Option value="oldest">Oldest</Select.Option>
                    </Select>
                    <Select placeholder="Role" className="w-40">
                        {/* Dynamically populate roles if needed */}
                        {permissionData.map((role) => (
                            <Select.Option key={role.key} value={role.key}>{role.label}</Select.Option>
                        ))}
                    </Select>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={data.length}
                        onChange={(page, size) => {
                            setCurrentPage(page);
                            setPageSize(size);
                        }}
                        showSizeChanger
                        size="small"
                    />
                </div>
            </div>
            {/* --- Table --- */}
            <CustomTable
                data={paginatedData}
                rowKey="id"
                columns={usersColumns}
                pagination={false}
                isRowSelectionEnabled={true}
            />
        </div>
    );
};

export default UsersTable;
