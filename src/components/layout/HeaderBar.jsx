import { Button, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import Logo from "@/assets/images/Logo.png";
import { monitorNavbarItems, navbarItems, roleItems } from "../../constants";
import { useNavbarStore } from "../../store/navbarStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function HeaderBar() {
    const setIsActive = useNavbarStore((state) => state.setIsActive);
    const isActive = useNavbarStore((state) => state.isActive);
    const navigate = useNavigate();

    // Track current selected role
    const [selectedRole, setSelectedRole] = useState(roleItems[0].key); // default first item
    // Dynamically pick menu items based on role
    const currentMenuItems =
        selectedRole === "monitor" ? monitorNavbarItems : navbarItems;

    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#fff",
                margin: "16px 24px",
                padding: "0px"
            }}
        >
            <div className="demo-logo flex items-center gap-4">
                <p className="text-lg font-semibold">
                    <img src={Logo} alt="Logo" />
                </p>
                {/* <Dropdown menu={{ items: roleItems }} placement="bottomLeft" arrow>
                    <Button className="!py-6">Manage</Button>
                </Dropdown> */}

                <Dropdown
                    menu={{
                        items: roleItems.map((role) => ({
                            key: role.key,
                            label: role.label,
                            onClick: () => setSelectedRole(role.key)
                        }))
                    }}
                    placement="bottomLeft"
                    arrow
                >
                    <Button className="!py-6">
                        {roleItems.find((r) => r.key === selectedRole)?.label || "Select"}
                    </Button>
                </Dropdown>
            </div>
            <div className="flex items-center gap-4">
                {currentMenuItems.map((item) => {
                    const activeClass = isActive === item.key ? "!bg-blue-500 !text-white" : "";
                    return (
                        <Button
                            key={item.key}
                            className={`!py-6 ${activeClass}`}
                            onClick={() => {
                                setIsActive(item.key);
                                if (item.route) navigate(item.route);
                            }}
                        >
                            {item.icon || item.label}
                        </Button>
                    );
                })}
            </div>
        </Header>
    );
}
