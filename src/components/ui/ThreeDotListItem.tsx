import type { ThreeDotListItemType } from "../../types/data";

const ThreeDotListItem = ({ listItem, iconPath }: ThreeDotListItemType) => {
  return (
    <li className="flex gap-2 tracking-wider hover:bg-blue-500 hover:text-text-primary hover:rounded-sm hover:px-1">
      <img src={iconPath} alt="" />
      {listItem}
    </li>
  );
};

export default ThreeDotListItem;
