import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { securitySchema, type SecurityData } from "../../lib/schema";

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
            <input type="password" {...register("password")} />
            <p className="text-red-500">{errors.password?.message}</p>
          </div>
          <label htmlFor="confirmPassword">Confirm Password </label>
          <input type="password" {...register("confirmPassword")} />
          <p className="text-red-500">{errors.confirmPassword?.message}</p>
        </div>

        <button onClick={back}>back</button>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default Security;
