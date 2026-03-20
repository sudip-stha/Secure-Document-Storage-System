import { appRoutes } from "../../routes/routes";
import NavItem from "../ui/NavItem";

const Aside = () => {
  return (
    <nav className="h-[89.7vh] px-5 py-3 bg-elevated-surface text-text-secondary">
      <ul className="flex flex-col">
        <li>
          <NavItem
            value="Home"
            iconPath="/icons/homeIcon.svg"
            URL={appRoutes.UserHome}
          />
        </li>

        <li>
          <NavItem
            value="My Files"
            iconPath="/icons/folderIcon.svg"
            URL={appRoutes.UserMyFiles}
          />
        </li>

        <li>
          <NavItem
            value="Access Requests"
            iconPath="/icons/requestIcon.svg"
            URL={appRoutes.UserAccessRequests}
          />
        </li>
        <li>
          <NavItem
            value=" Recent"
            iconPath="/icons/timerIcon.svg"
            URL={appRoutes.UserRecent}
          />
        </li>
        <li>
          <NavItem
            value="Starred"
            iconPath="/icons/starIcon.svg"
            URL={appRoutes.UserStarred}
          />
        </li>
        <li>
          <NavItem
            value="Trash"
            iconPath="/icons/trashIcon.svg"
            URL={appRoutes.UserTrash}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Aside;
