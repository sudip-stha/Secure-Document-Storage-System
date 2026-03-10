import { Activity, useState } from "react";
import PersonalInfo from "../components/Register/PersonalInfo";
import Security from "../components/Register/Security";
import Verification from "../components/Register/Verification";

const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <div className="h-[100vh] flex justify-center items-center bg-black">
      <div className="flex flex-col gap-[3rem] items-center ">
        <div className="flex flex-col gap-[8px] items-center ">
          <h1 className="font-poppins font-bold text-[24px] text-white">
            Register Your Account
          </h1>
          <p className="font-dmsans text-[16px] text-textSecondaryColor">
            Create an account (Admin Approval Required)
          </p>
        </div>

        <ol className="flex gap-24">
          <li
            className={`flex items-center gap-2 ${step === 1 ? "text-white" : "text-textTertiaryColor"}`}
          >
            <input
              type="radio"
              name="personal"
              value="personal"
              checked={step === 1}
              className="w-9 h-9"
            />{" "}
            Personal
          </li>
          <li
            className={`flex items-center gap-2 ${step === 2 ? "text-white" : "text-textTertiaryColor"}`}
          >
            <input
              type="radio"
              name="security"
              value="security"
              checked={step === 2}
              className="w-9 h-9"
            />
            Security
          </li>
          <li
            className={`flex items-center gap-2 ${step === 3 ? "text-white" : "text-textTertiaryColor"}`}
          >
            <input
              type="radio"
              name="verification"
              value="verification"
              checked={step === 3}
              className="w-9 h-9"
            />
            Verification
          </li>
        </ol>

        <Activity mode={step === 1 ? "visible" : "hidden"}>
          <PersonalInfo next={() => setStep(2)} />
        </Activity>

        <Activity mode={step === 2 ? "visible" : "hidden"}>
          <Security next={() => setStep(3)} back={() => setStep(1)} />
        </Activity>

        <Activity mode={step === 3 ? "visible" : "hidden"}>
          <Verification />
        </Activity>
      </div>
    </div>
  );
};

export default Register;
