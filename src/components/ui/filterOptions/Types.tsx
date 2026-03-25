import { useFilterAction } from "../../../hooks/useFilterAction";
import FilterHeaderBtn from "./FilterHeaderBtn";

const Types = () => {
  const filterAction = useFilterAction((state) => state.filterAction);
  return (
    <div>
      <FilterHeaderBtn filterTypeValue="Type" />
      <ul
        className={`pl-7 pt-5 flex flex-col gap-3 font-dmsans font-medium text-[16px] text-text-primary ${filterAction === "Type" ? "visible" : "hidden"}`}
      >
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Folder
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> PDF
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Document
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Text
        </li>
      </ul>
    </div>
  );
};

export default Types;
