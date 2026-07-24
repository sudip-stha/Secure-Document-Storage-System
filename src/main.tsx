import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Auths/Login.tsx";
import Register from "./pages/Auths/Register.tsx";
import { appRoutes } from "./routes/routes.ts";
import ForgotPassword from "./pages/Auths/ForgotPassword.tsx";
import AccessRequest from "./components/UserDashboard/section/accessRequest/AccessRequest.tsx";
import HomeSection from "./components/UserDashboard/section/home/HomeSection.tsx";
import MyFile from "./components/UserDashboard/section/myFile/MyFile.tsx";
import Recent from "./components/UserDashboard/section/recent/Recent.tsx";
import Starred from "./components/UserDashboard/section/starred/Starred.tsx";
import Trash from "./components/UserDashboard/section/trash/Trash.tsx";
import FilePreview from "./pages/User/FilePreview/FilePreview.tsx";
import DashboardLayout from "./layouts/DashboardLayout.tsx";
import AdminLayout from "./layouts/AdminLayout.tsx";
import AuditAndLogs from "./components/AdminDashboard/section/auditAndLogs/AuditAndLogs.tsx";
import UserManagement from "./components/AdminDashboard/section/userManagement/UserManagement.tsx";
import Files from "./components/AdminDashboard/section/files/Files.tsx";

const router = createBrowserRouter([
  {
    path: appRoutes.Home,
    element: <Login />,
  },
  {
    path: appRoutes.Login,
    element: <Login />,
  },
  {
    path: appRoutes.Register,
    element: <Register />,
  },
  {
    path: appRoutes.ForgotPassword,
    element: <ForgotPassword />,
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: appRoutes.UserHome,
        element: <HomeSection />,
      },
      {
        path: appRoutes.UserAccessRequests,
        element: <AccessRequest />,
      },
      {
        path: appRoutes.UserMyFiles,
        element: <MyFile />,
      },
      {
        path: appRoutes.UserRecent,
        element: <Recent />,
      },
      {
        path: appRoutes.UserStarred,
        element: <Starred />,
      },
      {
        path: appRoutes.UserTrash,
        element: <Trash />,
      },
    ],
  },
  {
    element: <AdminLayout />,
    children: [
      {
        path: appRoutes.AdminAuditLogs,
        element: <AuditAndLogs />,
      },
      {
        path: appRoutes.AdminUserManagement,
        element: <UserManagement />,
      },
      {
        path: appRoutes.AdminFiles,
        element: <Files />,
      },
    ],
  },
  {
    path: appRoutes.UserFilePreview,
    element: <FilePreview />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
