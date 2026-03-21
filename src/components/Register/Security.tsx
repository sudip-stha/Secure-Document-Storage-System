import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { securitySchema, type SecurityData } from "../../lib/schema";
import type { NextBtnType } from "../../types/data";
import InputField from "../ui/InputField";
import Button from "../ui/Button/Button";

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
    <div className="flex gap-10 flex-col w-204 bg-raised-surface border border-strong-border rounded-xl p-10">
      <h2 className="font-poppins font-bold text-[20px] text-white">
        Security Details
      </h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="font-dmsans text-[14px]"
      >
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-text-secondary">
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
            className=" flex items-center gap-3 text-text-secondary"
          >
            <img src="/icons/leftArrow.svg" alt="" className="w-3" />
            Back
          </button>

          <Button
            variant={"primary"}
            size={"md"}
            iconPath={"/icons/rightArrow.svg"}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Security;
