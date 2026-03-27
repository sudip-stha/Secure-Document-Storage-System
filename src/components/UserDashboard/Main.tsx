import UserSectionRoute from "../../routes/UserSectionRoute";
import Aside from "./Aside";

const Main = () => {
  return (
    <main className="flex bg-overlay-surface pt-1.5">
      <Aside />
      <UserSectionRoute />
    </main>
  );
};

export default Main;
