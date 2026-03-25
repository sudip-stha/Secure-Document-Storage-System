import Button from "../Button/Button";
import AccessState from "../filterOptions/AccessState";
import DateFilter from "../filterOptions/DateFilter";
import Owner from "../filterOptions/Owner";
import SizeFilter from "../filterOptions/SizeFilter";
import Types from "../filterOptions/types";

const FilterModal = () => {
  return (
    <div className="w-91 backdrop-blur-md bg-elevated-surface/10 border-2 border-default-border p-5 rounded-lg">
      <div className="flex justify-between">
        <h3 className="font-poppins font-bold text-[16px] text-white">
          Filters
        </h3>
        <Button variant={"primary"} size={"sm"}>
          Save View
        </Button>
      </div>
      <div className="mr-30 flex flex-col gap-5">
        <Types />
        <AccessState />
        <Owner />
        <DateFilter />
        <SizeFilter />
      </div>
    </div>
  );
};

export default FilterModal;
