import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { lazy, Suspense } from "react";
import ForgotPassword from "../pages/Auths/ForgotPassword";

const Login = lazy(() => import("../pages/Auths/Login"));
const Register = lazy(() => import("../pages/Auths/Register"));

const AuthPageRoute = () => (
  <div>
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path={appRoutes.Home} element={<Register />} />
        <Route path={appRoutes.Login} element={<Login />} />
        <Route path={appRoutes.Register} element={<Register />} />
        <Route path={appRoutes.ForgotPassword} element={<ForgotPassword />} />
      </Routes>
    </Suspense>
  </div>
);

export default AuthPageRoute;
