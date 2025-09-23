import { createBrowserRouter } from "react-router-dom";
// import pages and layouts
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import ForgotPassword from '../pages/auth/ForgotPassword';
import Login from '../pages/auth/Login';
import Cameras from "../pages/dashboard/Cameras/Cameras";
import Dashboard from "../pages/dashboard/Dashboard";
import Users from "../pages/dashboard/Users/Users";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  { path: '/forgotpassword', element: <ForgotPassword /> },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <Dashboard /> }, // default page when visiting /dashboard
      { path: "users", element: <Users /> },
      { path: "cameras", element: <Cameras /> },
    ],
  },
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-600">404 - Page Not Found</h1>
      </div>
    ),
  },
]);

export default Router;
