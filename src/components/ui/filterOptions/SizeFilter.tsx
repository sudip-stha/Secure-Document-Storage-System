import { useFilterAction } from "../../../hooks/useFilterAction";
import FilterHeaderBtn from "./FilterHeaderBtn";

const DateFilter = () => {
  const filterAction = useFilterAction((state) => state.filterAction);
  return (
    <div>
      <FilterHeaderBtn filterTypeValue="Size" />
      <ul
        className={`pl-7 pt-5 flex flex-col gap-3 font-dmsans font-medium text-[16px] text-text-primary ${filterAction === "Size" ? "visible" : "hidden"}`}
      >
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" />{" "}
          <span className="flex justify-center gap-2">
            <img
              src="/public/icons/dropDownIcon.svg"
              alt=""
              className="rotate-180 w-2"
            />
            5MB
          </span>
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> 5-50MB
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> 50MB+
        </li>
      </ul>
    </div>
  );
};

export default DateFilter;
