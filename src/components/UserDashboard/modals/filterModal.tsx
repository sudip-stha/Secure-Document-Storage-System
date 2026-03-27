import Button from "../../ui/Button/Button";
import AccessState from "../../ui/filterOptions/AccessState";
import DateFilter from "../../ui/filterOptions/DateFilter";
import Owner from "../../ui/filterOptions/Owner";
import SizeFilter from "../../ui/filterOptions/SizeFilter";
import Types from "../../ui/filterOptions/Types";

const FilterModal = () => {
  return (
    <div
      className="w-91 backdrop-blur-md bg-elevated-surface/10 border-2 border-default-border p-5 rounded-lg"
      onClick={(e) => e.stopPropagation()}
    >
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
