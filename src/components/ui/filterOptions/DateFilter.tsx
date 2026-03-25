import { useFilterAction } from "../../../hooks/useFilterAction";
import FilterHeaderBtn from "./FilterHeaderBtn";

const DateFilter = () => {
  const filterAction = useFilterAction((state) => state.filterAction);
  return (
    <div>
      <FilterHeaderBtn filterTypeValue="Date" />
      <ul
        className={`pl-7 pt-5 flex flex-col gap-3 font-dmsans font-medium text-[16px] text-text-primary ${filterAction === "Date" ? "visible" : "hidden"}`}
      >
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Today
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Last 7 days
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Last 30 days
        </li>
      </ul>
    </div>
  );
};

export default DateFilter;
