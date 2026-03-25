import { useFilterAction } from "../../../hooks/useFilterAction";
import FilterHeaderBtn from "./FilterHeaderBtn";

const Owner = () => {
  const filterAction = useFilterAction((state) => state.filterAction);
  return (
    <div>
      <FilterHeaderBtn filterTypeValue="Owner" />
      <ul
        className={`pl-7 pt-5 flex flex-col gap-3 font-dmsans font-medium text-[16px] text-text-primary ${filterAction === "Owner" ? "visible" : "hidden"}`}
      >
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> My Files
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Other Users
        </li>
      </ul>
    </div>
  );
};

export default Owner;
