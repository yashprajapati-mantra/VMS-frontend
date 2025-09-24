// Centralized constants for navigation, roles, tabs, and permissions used throughout the app.
// navbarItems: Main navigation bar items for the app (Manage section)
// monitorNavbarItems: Navigation bar items for the Monitor section
// roleItems: Top-level role selection (Manage/Monitor)
// TabOptions: Tabs for Users page (App User/Roles and Permissions)
// permissionData: Permission options for roles and users

import { BellOutlined, UserOutlined } from "@ant-design/icons";

export const navbarItems = [
    { key: "cameras", label: "Cameras", route: "cameras" },
    { key: "users", label: "Users", route: "users" },
    { key: "enroll", label: "Enroll", route: "enroll" },
    { key: "systemSettings", label: "System Settings", route: "system-settings" },
    { key: "AImodel", label: "AI Model", route: "ai-model" },
    { key: "notifications", icon: <BellOutlined className="text-lg" /> },
    { key: "profiles", icon: <UserOutlined className="text-lg" /> },
];

export const monitorNavbarItems = [
    { key: "dashboard", label: "Dashboard", route: "/monitor/dashboard" },
    { key: "liveview", label: "Live View", route: "/monitor/liveview" },
    { key: "recordings", label: "Recordings", route: "/monitor/recordings" },
    { key: "events", label: "Events", route: "/monitor/events" },
    { key: "reports", label: "Reports", route: "/monitor/reports" },
    { key: "notifications", icon: <BellOutlined className="text-lg" /> },
    { key: "profiles", icon: <UserOutlined className="text-lg" /> },
];

export const roleItems = [
    { key: "manage", label: "Manage" },
    { key: "monitor", label: "Monitor" },
];

export const TabOptions = [
    { label: <div className="font-body">App User</div>, value: "appUser" },
    { label: <div className="font-body">Roles and Permissions</div>, value: "rolesAndPermissions" },
];

export const permissionData = [
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
