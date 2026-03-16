import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { securitySchema, type SecurityData } from "../../lib/schema";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import type { NextBtnType } from "../../types/data";
import InputField from "../ui/InputField";

const Security = ({ next, back }: NextBtnType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SecurityData>({
    resolver: zodResolver(securitySchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onsubmit(data: SecurityData) {
    next();
    console.log(data);
  }
  return (
    <div className="flex gap-10 flex-col w-204 bg-raisedSurfaceColor border border-strongBorderColor rounded-xl p-10">
      <h2 className="font-poppins font-bold text-[20px] text-white">
        Security Details
      </h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="font-dmsans text-[14px]"
      >
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-textSecondaryColor">
          <InputField
            label="Password"
            name="password"
            type="password"
            register={register}
            placeholder="Enter Your Password"
            error={errors.password}
            iconPath="/icons/lock.svg"
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            register={register}
            placeholder="Enter Your Confirm Password"
            error={errors.confirmPassword}
            iconPath="/icons/lock.svg"
          />
        </div>

        <div className="flex justify-between mt-[7.3rem]">
          <button
            onClick={back}
            className=" flex items-center gap-3 text-textSecondaryColor"
          >
            <img src="/icons/leftArrow.svg" alt="" className="w-3" />
            back
          </button>
          <PrimaryButton
            value={"continue"}
            iconPath={"/icons/rightArrow.svg"}
          />
        </div>
      </form>
    </div>
  );
};

export default Security;
