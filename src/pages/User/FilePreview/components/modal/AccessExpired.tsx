import { useNavigate } from "react-router-dom";
import Button from "../../../../../components/ui/Button/Button";
import Heading2 from "../../../../../components/ui/Heading2";
import { appRoutes } from "../../../../../routes/routes";

const AccessExpired = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 items-center px-32 py-14.5 bg-overlay-surface border border-strong-border rounded-xl shadow-[0 4 4 0 #000000]">
      <img src="/icons/accessExpired.png" alt="Access expired" />
      <div className="flex flex-col gap-2 items-center">
        <Heading2 value="Access Expired" />
        <p className="font-dmsans text-[12px] text-text-secondary max-w-67.5 text-center">
          Your 5-minute access window has expired. Please submit a new request
          to continue.
        </p>
      </div>
      <Button
        className={"px-5.75 py-3"}
        variant={"primary"}
        size={"md"}
        onClick={() => navigate(appRoutes.UserHome)}
      >
        Return to vault
      </Button>
    </div>
  );
};

export default AccessExpired;
