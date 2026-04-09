import { useButtonAction } from "../../../../hooks/useButtonAction";
import IncommingRequestBtn from "../../../ui/Button/IncommingRequestBtn";
import Heading1 from "../../../ui/Heading1";
import IncommingRequest from "./IncommingRequest";
import MyRequest from "./MyRequest";

const AccessRequest = () => {
  const isRequestBtnActive = useButtonAction(
    (state) => state.isRequestBtnActive,
  );
  return (
    <div className="flex flex-col gap-9 p-10">
      <IncommingRequestBtn />
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Heading1 value="Pending Requests" />
          <p className="font-dmsans font-medium text-[16px] text-text-secondary">
            Authorization requests for your document
          </p>
        </div>
        {isRequestBtnActive === "incomming" ? (
          <IncommingRequest />
        ) : (
          <MyRequest />
        )}
      </div>
    </div>
  );
};

export default AccessRequest;
