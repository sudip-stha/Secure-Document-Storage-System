import { Activity, useState } from "react";
import PersonalInfo from "../../components/Register/PersonalInfo";
import Security from "../../components/Register/Security";
import Verification from "../../components/Register/Verification";

const Register = () => {
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState<number[]>([]);

  const nextStep = (next: number) => {
    setComplete((prev) => {
      if (complete.includes(next)) return prev;
      return [...prev, next];
    });
    setStep(next);
  };

  const getRadioColor = (currentStep: number) => {
    if (step === currentStep) return "accent-blue-500";
    if (complete.includes(currentStep)) return "accent-green-600";
    return "accent-grey-500";
  };

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col gap-12 items-center ">
        <div className="flex flex-col gap-2 items-center ">
          <h1 className="font-poppins font-bold text-[24px] text-white">
            Register Your Account
          </h1>
          <p className="font-dmsans text-[16px] text-textSecondaryColor">
            Create an account (Admin Approval Required)
          </p>
        </div>

        <ol className="flex gap-3 items-center">
          <li
            className={`flex items-center gap-2 ${step === 1 ? "text-white" : "text-textTertiaryColor"}`}
          >
            <input
              type="radio"
              name="personal"
              value="personal"
              checked={step === 1 || complete.includes(2)}
              className={`w-9 h-9 ${getRadioColor(1)}`}
              onClick={() => setStep(1)}
            />
            Personal
          </li>
          <li className="w-24 h-px bg-textSecondaryColor"></li>
          <li
            className={`flex items-center gap-2 ${step === 2 ? "text-white" : "text-textSecondaryColor"}`}
          >
            <input
              type="radio"
              name="security"
              value="security"
              checked={step === 2 || complete.includes(3)}
              className={`w-9 h-9 ${getRadioColor(2)}`}
            />
            Security
          </li>
          <li className="w-24 h-px bg-textSecondaryColor"></li>
          <li
            className={`flex items-center gap-2 ${step === 3 ? "text-white" : "text-textTertiaryColor"}`}
          >
            <input
              type="radio"
              name="verification"
              value="verification"
              checked={step === 3}
              className={`w-9 h-9 ${getRadioColor(3)}`}
            />
            Verification
          </li>
        </ol>

        <Activity mode={step === 1 ? "visible" : "hidden"}>
          <PersonalInfo next={() => nextStep(2)} />
        </Activity>

        <Activity mode={step === 2 ? "visible" : "hidden"}>
          <Security next={() => nextStep(3)} back={() => setStep(1)} />
        </Activity>

        <Activity mode={step === 3 ? "visible" : "hidden"}>
          <Verification />
        </Activity>
      </div>
    </div>
  );
};

export default Register;
