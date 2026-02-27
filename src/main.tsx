import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import { appRoutes } from "./routes/routes.ts";

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
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
