import { BellOutlined, UserOutlined } from "@ant-design/icons";

/**
 * navbarItems:
 * - Defines the navigation items used in the dashboard's top navigation bar.
 * - Each object contains:
 *   - key: Unique identifier (used for active highlighting)
 *   - label: Text to display (optional if using only an icon)
 *   - route: Relative path for react-router navigation
 *   - icon: Ant Design icon component (optional)
 */
const navbarItems = [
    { key: "cameras", label: "Cameras", route: "cameras" },
    { key: "users", label: "Users", route: "users" },
    { key: "enroll", label: "Enroll", route: "enroll" },
    { key: "systemSettings", label: "System Settings", route: "system-settings" },
    { key: "AImodel", label: "AI Model", route: "ai-model" },
    { key: "notifications", icon: <BellOutlined /> }, // Notification bell icon (no label, just icon)
    { key: "profiles", icon: <UserOutlined /> }, // User profile icon
];

const monitorNavbarItems = [
    { key: "dashboard", label: "Dashboard", route: "/monitor/dashboard" },
    { key: "liveview", label: "Live View", route: "/monitor/liveview" },
    { key: "recordings", label: "Recordings", route: "/monitor/recordings" },
    { key: "events", label: "Events", route: "/monitor/events" },
    { key: "reports", label: "Reports", route: "/monitor/reports" },
    { key: "notifications", icon: <BellOutlined /> }, // Notification bell icon (no label, just icon)
    { key: "profiles", icon: <UserOutlined /> }, // User profile icon
];

// roleItems:
// - Used in the navbar for the roles dropdown menu.
// - Each object contains:
//   - key: Unique identifier for the role
//   - label: Display text for the role
const roleItems = [
    { key: "manage", label: "Manage" },
    { key: "monitor", label: "Monitor" },
];


const TabOptions = [
    { label: "App User", value: "appUser" },
    { label: "Roles and Permissions", value: "rolesAndPermissions" },
];

export { TabOptions, navbarItems, monitorNavbarItems, roleItems };
