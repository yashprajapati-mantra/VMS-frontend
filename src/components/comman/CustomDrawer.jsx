import { Drawer } from "antd";

const CustomDrawer = ({ open, onClose, title, children, width }) => {
    return (
        <Drawer
            title={title}
            open={open}
            onClose={onClose}
            placement="right"
            width={width || 450}
            styles={{ paddingBottom: 80 }}
            className="rounded-l-xl"
        >
            {children}
        </Drawer >
    );
};

export default CustomDrawer;
