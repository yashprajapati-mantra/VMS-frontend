import { Button, Form, Segmented, Upload, message } from "antd";
import { useState } from "react";
import CustomDrawer from "../comman/CustomDrawer";
import SingleUserForm from "./SingleUserForm";



const AddUserForm = ({ open, onClose }) => {
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log("Form Values:", values);
        // Call API here or pass to controller
        onClose();
    };

    const uploadProps = {
        accept: '.csv',
        beforeUpload: file => {
            const isCsv = file.type === 'text/csv' || file.name.endsWith('.csv');
            if (!isCsv) {
                message.error('Only CSV files are allowed.');
            }
            return isCsv || Upload.LIST_IGNORE;
        },
        maxCount: 1, // to only allow single file upload
    };



    const [userMode, setUserMode] = useState("single");

    return (
        <CustomDrawer open={open} onClose={onClose} title="Add App User">
            <div className="flex w-full !mb-6">
                <Segmented
                    options={[{ label: <div className="!w-1/2 !text-center">Single user</div>, value: "single" }, { label: <div className="!w-1/2 !text-center">Bulk users</div>, value: "bulk" }]}
                    value={userMode}
                    onChange={setUserMode}
                    size="large"
                    className="flex-1"
                    style={{ width: '100%' }}
                />
            </div>

            {userMode === "single" ? (
                <SingleUserForm form={form} onSubmit={handleSubmit} onClose={onClose} />
            ) : (
                <div className="">
                    <Form form={form} layout="vertical">
                        <Form.Item
                            label="Upload file"
                            required
                            rules={[
                                { required: true, message: 'Please upload a file' }
                            ]}
                        >
                            <Upload.Dragger {...uploadProps} className="!border-dashed !rounded-lg">
                                <span>Upload .csv file from your device</span>
                            </Upload.Dragger>

                            <div className="flex fixed bottom-10 right-6 justify-end gap-3">
                                <Button onClick={onClose} type="button" size="large" className="secondary_btn">Cancel</Button>
                                <Button type="button" htmlType="submit" size="large" className="primary_btn">
                                    Import Users
                                </Button>
                            </div>
                        </Form.Item>
                    </Form>
                </div>
            )}
        </CustomDrawer>
    );
};

export default AddUserForm;
