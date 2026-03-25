import { useFilterAction } from "../../../hooks/useFilterAction";
import FilterHeaderBtn from "./FilterHeaderBtn";

const AccessState = () => {
  const filterAction = useFilterAction((state) => state.filterAction);
  return (
    <div>
      <FilterHeaderBtn filterTypeValue="Access State" />
      <ul
        className={`pl-7 pt-5 flex flex-col gap-3 font-dmsans font-medium text-[16px] text-text-primary ${filterAction === "Access State" ? "visible" : "hidden"}`}
      >
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Authorized
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Pending Request
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Rejected
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Locked
        </li>
        <li className="flex gap-5">
          <input type="checkbox" name="" id="" /> Expired Access
        </li>
      </ul>
    </div>
  );
};

export default AccessState;
