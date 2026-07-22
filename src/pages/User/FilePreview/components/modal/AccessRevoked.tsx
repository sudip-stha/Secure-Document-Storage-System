import { useNavigate } from "react-router-dom";
import Heading2 from "../../../../../components/ui/Heading2";
import Button from "../../../../../components/ui/Button/Button";
import { appRoutes } from "../../../../../routes/routes";
import type { AccessRevokedProps } from "../../../../../types/data";

const AccessRevoked = ({
  revokedMessage,
}: AccessRevokedProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 items-center px-32 py-14.5 bg-overlay-surface border border-strong-border rounded-xl shadow-[0 4 4 0 #000000]">
      <img src="/icons/accessRevoked.png" alt="Access revoked" />
      <div className="flex flex-col gap-2 items-center">
        <Heading2 value="Access Revoked" />
        <p className="font-dmsans text-[12px] text-text-secondary max-w-75 text-center ">
          {revokedMessage}
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

export default AccessRevoked;
