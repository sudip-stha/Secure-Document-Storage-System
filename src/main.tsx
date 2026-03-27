import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
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

const router = createBrowserRouter([
  {
    path: appRoutes.Home,
    element: <App />,
    children: [
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
