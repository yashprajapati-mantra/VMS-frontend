import { Button, Form, Input, Select, Switch, Tabs } from "antd";
import CustomDrawer from "../comman/CustomDrawer";

const { TabPane } = Tabs;

const AddUserForm = ({ open, onClose }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Form Values:", values);
        // Call API here or pass to controller
        onClose();
    };

    return (
        <CustomDrawer open={open} onClose={onClose} title="Add App User">
            {/* Tabs for Single user / Bulk users */}
            <Tabs defaultActiveKey="single" className="mb-4">
                <TabPane tab="Single user" key="single">
                    <Form layout="vertical" form={form} onFinish={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4">
                            <Form.Item
                                name="firstName"
                                label="First name"
                                rules={[{ required: true, message: "Enter first name" }]}
                            >
                                <Input placeholder="Enter first name" />
                            </Form.Item>

                            <Form.Item
                                name="lastName"
                                label="Last name"
                                rules={[{ required: true, message: "Enter last name" }]}
                            >
                                <Input placeholder="Enter last name" />
                            </Form.Item>
                        </div>

                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: "Enter username" }]}
                        >
                            <Input placeholder="Enter username" />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: "Enter email" },
                                { type: "email", message: "Enter valid email" },
                            ]}
                        >
                            <Input placeholder="Enter email" />
                        </Form.Item>

                        <Form.Item
                            name="role"
                            label="Role"
                            rules={[{ required: true, message: "Select a role" }]}
                        >
                            <Select placeholder="Select role">
                                <Select.Option value="security">Security Analyst</Select.Option>
                                <Select.Option value="technician">Technician</Select.Option>
                                <Select.Option value="admin">Admin</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item name="enable2fa" label="Enable 2FA for this user" valuePropName="checked">
                            <Switch />
                        </Form.Item>

                        <div className="flex justify-end gap-3">
                            <Button onClick={onClose} type="button" size="large" className="secondary_btn">Cancel</Button>
                            <Button type="button" htmlType="submit" size="large" className="primary_btn">
                                Add User
                            </Button>
                        </div>
                    </Form>
                </TabPane>

                <TabPane tab="Bulk users" key="bulk">
                    <p className="text-gray-500">Bulk user upload coming soon...</p>
                </TabPane>
            </Tabs>
        </CustomDrawer>
    );
};

export default AddUserForm;
