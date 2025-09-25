import { DatePicker, Input, Pagination, Select, Button, Space, Switch } from "antd";
import { FunnelPlotOutlined, SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import EmptyBox from "../../../assets/svg/EmptyBox";
import CustomTable from "../../../components/comman/CustomTable";
import FilterForm from "../../../components/users/FilterForm";
import { useUsersTableController } from "./UserTableController";

const { Search } = Input;

const UsersTable = ({ data }) => {
    const {
        usersColumns,
        paginatedData,
        currentPage,
        pageSize,
        setCurrentPage,
        setPageSize,
        isDrawerOpen,
        setDrawerOpen,
        permissionData,
    } = useUsersTableController(data);

    if (paginatedData.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <EmptyBox />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-4 mx-2">
            {/* --- Top Row: Search + Filters + Pagination --- */}
            <div className="flex items-center justify-between">
                <Input
                    prefix={<SearchOutlined style={{ color: "#8C98A4" }} />}
                    placeholder="Search"
                    className="rounded-full border border-gray-200 px-4 py-2 text-gray-500 bg-white focus:shadow-none focus:border-blue-300 !w-64 !h-10"
                />
                <div className="flex items-center gap-3">
                    <DatePicker className="!w-40 !h-10" placeholder="Date Added" onChange={(dateString) => console.log(dateString)} />

                    <Select placeholder="Role" className="!w-40 !h-10">
                        {permissionData.map((role) => (
                            <Select.Option key={role.key} value={role.key}>{role.label}</Select.Option>
                        ))}
                    </Select>

                    <Button className="!w-10 !h-10" icon={<FunnelPlotOutlined className="!text-lg" />} onClick={() => setDrawerOpen(true)} />
                    {isDrawerOpen && <FilterForm open={isDrawerOpen} onClose={() => setDrawerOpen(false)} />}
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={data.length}
                        onChange={(page, size) => {
                            setCurrentPage(page);
                            setPageSize(size);
                        }}
                        showSizeChanger
                        size="large"
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