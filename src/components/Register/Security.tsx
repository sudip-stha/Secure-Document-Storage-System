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
    <div className="flex gap-[2.5rem] flex-col w-[45.1rem] bg-raisedSurfaceColor border border-strongBorderColor rounded-[12px] p-[2.5rem]">
      <h2 className="font-poppins font-bold text-[20px] text-white">
        Security Details
      </h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="font-dmsans text-[14px]"
      >
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1rem] text-textSecondaryColor">
          <InputField
            label="Password"
            name="password"
            type="password"
            register={register}
            placeholder="Enter Your Password"
            error={errors.password}
            iconPath="/public/icons/lock.svg"
          />

          <InputField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            register={register}
            placeholder="Enter Your Confirm Password"
            error={errors.confirmPassword}
            iconPath="/public/icons/lock.svg"
          />
        </div>

        <div className="flex justify-between mt-[7.3rem]">
          <button onClick={back}>back</button>
          <PrimaryButton
            value={"continue"}
            iconPath={"/public/icons/rightArrow.svg"}
          />
        </div>
      </form>
    </div>
  );
};

export default Security;
