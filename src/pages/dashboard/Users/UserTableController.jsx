import { useMemo, useState } from "react";
import { permissionData } from "../../../constants";
import { Button, Space, Switch } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

export const useUsersTableController = (data) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const usersColumns = useMemo(() => [
    {
      title: "Full Name",
      key: "fullname",
      render: (_, record) => `${record.firstName} ${record.lastName}`,
    },
    { title: "Username", dataIndex: "username" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "roles" },
    {
      title: "2FA", dataIndex: "twoFactorAuth",
      render: (enabled, record) => (
        <Switch
          checked={enabled}
          onChange={(checked) => {
            // Handle toggle change
            console.log("2FA for user", record.id, "is now", checked);
          }}
        />
      ),
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            onClick={() => alert("Edit user: " + record.id)}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
          <Button
            danger
            onClick={() => alert("Delete user: " + record.id)}
            icon={<DeleteOutlined />}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ], []);

  const paginatedData = useMemo(() =>
    data?.slice((currentPage - 1) * pageSize, currentPage * pageSize),
    [data, currentPage, pageSize]
  );

  return {
    usersColumns,
    paginatedData,
    currentPage,
    pageSize,
    setCurrentPage,
    setPageSize,
    isDrawerOpen,
    setDrawerOpen,
    permissionData,
    data,
  };
};