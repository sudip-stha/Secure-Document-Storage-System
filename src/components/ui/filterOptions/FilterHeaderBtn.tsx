import { useFilterAction } from "../../../hooks/useFilterAction";
import type { FilterHeaderBtnType } from "../../../types/data";

const FilterHeaderBtn = ({ filterTypeValue }: FilterHeaderBtnType) => {
  const setFilterAction = useFilterAction((state) => state.setFilterAction);
  const filterAction = useFilterAction((state) => state.filterAction);

  return (
    <div>
      <button
        className="flex gap-5 font-dmsans font-medium text-[14px] text-white"
        onClick={() => setFilterAction(filterTypeValue)}
        onDoubleClick={() => setFilterAction("")}
      >
        <img
          src="/public/icons/dropDownIcon.svg"
          alt=""
          className={`${filterAction ? "-rotate-90" : ""}`}
        />{" "}
        {filterTypeValue}
      </button>
    </div>
  );
};

export default FilterHeaderBtn;
