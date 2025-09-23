// src/pages/dashboard/DashboardLayout.jsx
import { Layout } from "antd";
import HeaderBar from "../../components/layout/HeaderBar";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

const DashboardLayout = () => {
  return (
    <Layout className="!bg-white !mx-4 !flex !flex-col !min-h-screen">
      {/* Header bar (stays fixed across all pages) */}
      <HeaderBar />

      {/* Page Content (changes based on route) */}
      <Content style={{ padding: "1rem" }}>
        <Outlet />
      </Content>

      <Footer style={{ textAlign: "center" }}>
        VMS System ©{new Date().getFullYear()} Created by Mantra
      </Footer>
    </Layout>
  );
};

export default DashboardLayout;
