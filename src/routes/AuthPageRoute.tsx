import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

const AuthPageRoute = () => (
  <div>
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path={appRoutes.Login} element={<Login />} />
        <Route path={appRoutes.Register} element={<Register />} />
      </Routes>
    </Suspense>
  </div>
);

export default AuthPageRoute;
