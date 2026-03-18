import { NavLink } from "react-router-dom";
import type { NavItemType } from "../../types/data";

const NavItem = ({ value, iconPath, URL }: NavItemType) => {
  return (
    <div>
      <NavLink
        to={URL}
        className="flex gap-4 py-3 pl-4 pr-25 font-dmsans font-medium"
      >
        <img src={iconPath} alt="" />
        {value}
      </NavLink>
    </div>
  );
};

export default NavItem;
