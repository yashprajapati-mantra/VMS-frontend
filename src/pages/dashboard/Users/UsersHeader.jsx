import { PlusOutlined } from "@ant-design/icons";
import { Button, Segmented } from "antd";
import { TabOptions } from "../../../constants";


const UsersHeader = ({ selectedTab, setSelectedTab, onAddClick }) => {

    return (
        <div className="flex justify-between items-center my-4 mx-2">
            <Segmented
                value={selectedTab}
                onChange={setSelectedTab}
                options={TabOptions}
                size="large"
                style={{ marginBottom: 8, fontSize: 14 }}
            />

            <div className="flex gap-3">
                <Button
                    type="button"
                    icon={<PlusOutlined />}
                    onClick={onAddClick}
                    size="large"
                    className="primary_btn"

                >
                    {selectedTab === "appUser" ? "Add App User" : "Add Role"}
                </Button>
            </div>
        </div>
    );
};

export default UsersHeader;
