import type { ThreeDotListItemType } from "../../types/data";

const ThreeDotListItem = ({ listItem, iconPath }: ThreeDotListItemType) => {
  return (
    <li className="flex gap-2 tracking-wider">
      <img src={iconPath} alt="" />
      {listItem}
    </li>
  );
};

export default ThreeDotListItem;
