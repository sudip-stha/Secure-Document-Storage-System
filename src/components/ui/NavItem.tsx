import { NavLink } from "react-router-dom";
import type { NavItemType } from "../../types/data";

const NavItem = ({ value, iconPath, URL }: NavItemType) => {
  return (
    <div>
      <NavLink
        to={URL}
        className={({ isActive }) =>
          `flex gap-4 py-3 pl-4 pr-18 font-dmsans font-medium ${isActive ? "bg-top-surface text-blue-400 rounded-lg border-l-3 border-blue-400  " : ""}`
        }
      >
        <img src={iconPath} alt="" />

        {value}
      </NavLink>
    </div>
  );
};

export default NavItem;
