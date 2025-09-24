import { Button, Form, Input, Select, Switch, Tabs } from "antd";
import CustomDrawer from "../comman/CustomDrawer";

const { TabPane } = Tabs;

const FilterForm = ({ open, onClose }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Form Values:", values);
        // Call API here or pass to controller
        onClose();
    };

    return (
        <CustomDrawer open={open} onClose={onClose} title="Filters">
            <Form layout="vertical" form={form} onFinish={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <Form.Item
                        name="FullName"
                        label="Full name"
                        rules={[{ required: true, message: "Enter full name" }]}
                    >
                        <Input placeholder="Enter Full name" />
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



                <div className="flex fixed bottom-10 right-6  justify-end gap-3 mt-full items-end">
                    <Button onClick={onClose} type="button" size="large" className="secondary_btn">Cancel</Button>
                    <Button type="button" htmlType="submit" size="large" className="primary_btn">
                        Apply Filter
                    </Button>
                </div>
            </Form>


        </CustomDrawer>
    );
};

export default FilterForm;
