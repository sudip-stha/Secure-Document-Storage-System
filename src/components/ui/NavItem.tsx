import { NavLink } from "react-router-dom";
import type { NavItemType } from "../../types/data";

const NavItem = ({ value, iconPath, URL }: NavItemType) => {
  return (
    <div>
      <NavLink
        to={URL}
        className={({ isActive }) =>
          `flex gap-4 items-center py-3 pl-4 pr-16 font-dmsans font-medium ${isActive ? "bg-top-surface text-blue-400 rounded-lg border-l-3 border-blue-400  " : ""}`
        }
      >
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
          <path d={iconPath} strokeWidth="1.5" stroke="currentColor" />
        </svg>
        {value}
      </NavLink>
    </div>
  );
};

export default NavItem;
