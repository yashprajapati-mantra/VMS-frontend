import Logo from "@/assets/images/Logo.png";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import { Header } from "antd/es/layout/layout";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { monitorNavbarItems, navbarItems, roleItems } from "../../constants";

export default function HeaderBar() {
    const [isActiveTab, setIsActiveTab] = useState(localStorage.getItem("isActiveTab") || 'dashboard')
    const navigate = useNavigate();

    // Track current selected role
    const [selectedRole, setSelectedRole] = useState(roleItems[0].key);

    // Dynamically pick menu items based on role, memoized
    const currentMenuItems = useMemo(() => {
        return selectedRole === "monitor" ? monitorNavbarItems : navbarItems;
    }, [selectedRole]);


    useEffect(() => {
        const prevRole = localStorage.getItem("selectedRole");
        if (prevRole !== selectedRole) {
            localStorage.setItem("selectedRole", selectedRole);
            navigate("/dashboard"); // Redirect to dashboard on role change
        }

    }, [selectedRole, navigate]);

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
                            onClick: () => setSelectedRole(role.key)
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
            </div>
            <div className="flex items-center gap-4">
                {currentMenuItems.map((item) => {
                    const activeClass = isActiveTab === item.key ? "!bg-blue-500 !text-white" : "";
                    return (
                        <Button
                            key={item.key}
                            type="button"
                            size="large"
                            variant="outlined"
                            className={`${activeClass ? 'primary_btn' : 'secondary_btn'} !h-12`}
                            onClick={() => {
                                setIsActiveTab(item.key);
                                localStorage.setItem("isActiveTab", item.key);
                                if (item.route) navigate(item.route);
                            }}
                        >
                            {item.icon || item.label}
                        </Button>
                    );
                })}
                {/* 
                <Menu
                    mode="horizontal"
                    selectedKeys={[location.pathname]}
                    items={currentMenuItems}
                    onClick={({ key }) => navigate(key)}
                    style={{
                        border: "none",
                        display: "flex",
                        gap: "8px",
                        background: "transparent",

                    }}
                    className="hover:border-0 !flex !gap-2 [&_.ant-menu-item]:!rounded-xl [&_.ant-menu-item-selected]:!bg-indigo-600 [&_.ant-menu-item-selected]:!text-white"
                /> */}
            </div>
        </Header>
    );
}
