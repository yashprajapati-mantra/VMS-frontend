import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import "antd/dist/reset.css";
import App from "./App.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConfigProvider, App as AntdApp } from "antd";
import { NotificationProvider } from "./components/comman/NotificationProvider.jsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider>
        <AntdApp>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </AntdApp>
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
