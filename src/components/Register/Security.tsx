import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { securitySchema, type SecurityData } from "../../lib/schema";
import PrimaryButton from "../ui/Buttons/PrimaryButton";

const Security = ({ next, back }) => {
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

  function onsubmit() {
    next();
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
          <div className="flex flex-col gap-[14px] ">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter Your Password"
              className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] p-[8px]"
            />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <div className="flex flex-col gap-[14px]">
            <label htmlFor="confirmPassword">Confirm Password </label>
            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Enter Your Password"
              className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] p-[8px]"
            />
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </div>
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
