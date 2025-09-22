import { PlusOutlined } from "@ant-design/icons";
import { Button, Input, Segmented, Select } from "antd";
import { TabOptions } from "../../../constants";
import { useState } from "react";

const { Search } = Input;

const UsersHeader = ({ selectedTab, setSelectedTab, onAddClick }) => {
    const [search, setSearch] = useState("");

    return (
        <div className="flex justify-between items-center my-4 mx-2">
            <Segmented
                value={selectedTab}
                onChange={setSelectedTab}
                options={TabOptions}
                style={{ marginBottom: 8 }}
            />

            <div className="flex gap-3">
                <Search
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-64"
                />

                <Select placeholder="Date added" className="w-40">
                    <Select.Option value="recent">Recently Added</Select.Option>
                    <Select.Option value="oldest">Oldest</Select.Option>
                </Select>

                <Select placeholder="Role" className="w-40">
                    <Select.Option value="all">All Roles</Select.Option>
                    <Select.Option value="security">Security Analyst</Select.Option>
                    <Select.Option value="tech">Technician</Select.Option>
                </Select>

                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    onClick={onAddClick}
                    className="rounded-xl"
                >
                    {selectedTab === "appUser" ? "Add App User" : "Add Role"}
                </Button>
            </div>
        </div>
    );
};

export default UsersHeader;
