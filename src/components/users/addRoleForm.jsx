import { Button, Form, Input, Tabs, Table, Checkbox } from "antd";
import CustomDrawer from "../comman/CustomDrawer";
import { useState } from "react";

const { TabPane } = Tabs;

const AddRoleForm = ({ open, onClose }) => {
    const [form] = Form.useForm();
    const [permissions, setPermissions] = useState({});

    // Permissions Data
    const permissionData = [
        { key: "cameras", label: "Cameras" },
        { key: "liveStreams", label: "Live Streams" },
        { key: "configureCamera", label: "Configure Camera Settings" },
        { key: "diskMonitoring", label: "Disk Monitoring" },
        { key: "playRecording", label: "Play Recording" },
        { key: "downloadRecording", label: "Download Recording" },
        { key: "user", label: "User" },
        { key: "rolesPermissions", label: "Roles and Permissions" },
        { key: "enrollUser", label: "Enroll User" },
    ];

    // Table Columns with Dynamic Checkbox
    const columns = [
        {
            title: "Actions",
            dataIndex: "label",
            key: "label",
        },
        ...["viewOnly", "addCreate", "updateEdit", "activeInactive", "selectAll"].map(
            (col) => ({
                title: col
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase()),
                dataIndex: col,
                key: col,
                align: "center",
                render: (_, record) => (
                    <Checkbox
                        checked={permissions[record.key]?.[col] || false}
                        onChange={(e) =>
                            setPermissions((prev) => ({
                                ...prev,
                                [record.key]: {
                                    ...prev[record.key],
                                    [col]: e.target.checked,
                                },
                            }))
                        }
                    />
                ),
            })
        ),
    ];

    const handleSubmit = (values) => {
        console.log("Form Values:", { ...values, permissions });
        // API call or pass to controller
        onClose();
    };

    return (
        <CustomDrawer open={open} onClose={onClose} title="Add Role" width={1010}>
            {/* Tabs for Permissions Sections */}
            <Tabs defaultActiveKey="camera" className="mb-4">
                <TabPane tab="Camera Management" key="camera">
                    <Form layout="vertical" form={form} onFinish={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                                name="roleName"
                                label="Role Name"
                                rules={[{ required: true, message: "Enter role name" }]}
                            >
                                <Input placeholder="Enter role name" />
                            </Form.Item>

                            <Form.Item
                                name="description"
                                label="Description"
                                rules={[{ required: true, message: "Enter description" }]}
                            >
                                <Input placeholder="Enter description" />
                            </Form.Item>
                        </div>

                        {/* Permissions Table */}
                        <Table
                            columns={columns}
                            dataSource={permissionData}
                            pagination={false}
                            rowKey="key"
                            bordered
                            className="rounded-lg"
                            scroll={{ x: true }}
                        />

                        <div className="flex justify-end gap-3 mt-4">
                            <Button onClick={onClose}>Cancel</Button>
                            <Button type="primary" htmlType="submit">
                                Create Role
                            </Button>
                        </div>
                    </Form>
                </TabPane>

                <TabPane tab="User Management" key="user">
                    <p className="text-gray-500">User Management permissions coming soon...</p>
                </TabPane>
            </Tabs>
        </CustomDrawer>
    );
};

export default AddRoleForm;
