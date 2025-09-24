import Logo from "@/assets/images/Logo.png";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { monitorNavbarItems, navbarItems, roleItems } from "../../constants";
import { useNavbarStore } from "../../store/navbarStore";


export default function HeaderBar() {
    const setIsActive = useNavbarStore((state) => state.setIsActive);
    const isActive = useNavbarStore((state) => state.isActive);
    const navigate = useNavigate();

    // Track current selected role
    const [selectedRole, setSelectedRole] = useState(localStorage.getItem("selectedRole") || roleItems[0].key); // default first item

    // Dynamically pick menu items based on role
    const currentMenuItems =
        selectedRole === "monitor" ? monitorNavbarItems : navbarItems;


    useEffect(() => {
        localStorage.setItem("selectedRole", selectedRole);
        navigate("/dashboard"); // Redirect to dashboard on role change
    }, [selectedRole])

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
            <div className="demo-logo flex !items-center h-full gap-4">
                <img src={Logo} alt="Logo" />
                <Dropdown
                    menu={{
                        items: roleItems.map((role) => ({
                            key: role.key,
                            label: role.label,
                            onClick: () => {
                                setSelectedRole(role.key);
                            }
                        }))
                    }}
                    placement="bottomLeft"
                    arrow
                >
                    <Button
                        type="button"
                        className={`secondary_btn !h-12`}

                    >
                        {roleItems.find((r) => r.key === selectedRole)?.label || "Select"}  <DownOutlined />
                    </Button>
                </Dropdown>
            </div >
            <div className="flex items-center gap-4">
                {currentMenuItems.map((item) => {
                    const activeClass = isActive === item.key ? "!bg-blue-500 !text-white" : "";
                    return (
                        <Button
                            key={item.key}
                            type="button"
                            size="large"
                            variant="outlined"
                            className={`${activeClass ? 'primary_btn' : 'secondary_btn'} !h-12`}
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
        </Header >
    );
}
