import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes";

const HomeSection = lazy(
  () => import("../components/UserDashboard/section/home/HomeSection"),
);
const AccessRequest = lazy(
  () =>
    import("../components/UserDashboard/section/accessRequest/AccessRequest"),
);
const MyFile = lazy(
  () => import("../components/UserDashboard/section/myFile/MyFile"),
);
const Recent = lazy(
  () => import("../components/UserDashboard/section/recent/Recent"),
);
const Starred = lazy(
  () => import("../components/UserDashboard/section/starred/Starred"),
);

const Trash = lazy(
  () => import("../components/UserDashboard/section/trash/Trash"),
);

const Section = () => {
  return (
    <div>
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path={appRoutes.UserHome} element={<HomeSection />} />
          <Route
            path={appRoutes.UserAccessRequests}
            element={<AccessRequest />}
          />
          <Route path={appRoutes.UserMyFiles} element={<MyFile />} />
          <Route path={appRoutes.UserRecent} element={<Recent />} />
          <Route path={appRoutes.UserStarred} element={<Starred />} />
          <Route path={appRoutes.UserTrash} element={<Trash />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Section;
