import React, { createContext, useContext } from "react";
import { notification } from "antd";

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [api, contextHolder] = notification.useNotification();

  // ✅ AntD-style function
  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message,
      description,
      placement: "topRight",
      duration: 3,
    });
  };

  // ✅ Optional shortcut helpers
  const notify = {
    success: (msg, desc) => openNotificationWithIcon("success", msg, desc),
    error: (msg, desc) => openNotificationWithIcon("error", msg, desc),
    info: (msg, desc) => openNotificationWithIcon("info", msg, desc),
    warning: (msg, desc) => openNotificationWithIcon("warning", msg, desc),
  };

  return (
    <NotificationContext.Provider value={{ openNotificationWithIcon, notify }}>
      {contextHolder} 
      {children}
    </NotificationContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useNotify = () => useContext(NotificationContext);
