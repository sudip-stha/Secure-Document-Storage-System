import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/Auths/Login.tsx";
import Register from "./pages/Auths/Register.tsx";
import { appRoutes } from "./routes/routes.ts";
import ForgotPassword from "./pages/Auths/ForgotPassword.tsx";

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
