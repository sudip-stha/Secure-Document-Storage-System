import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";
import { Suspense } from "react";
import Home from "../pages/User/Home";

const UserPageRoute = () => {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path={appRoutes.UserHome} element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default UserPageRoute;
