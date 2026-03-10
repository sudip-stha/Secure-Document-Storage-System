import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import PrimaryButton from "../ui/Buttons/PrimaryButton";

const LoginCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit() {}
  return (
    <div className="flex gap-[4.5rem] flex-col items-center bg-raisedSurfaceColor border border-strongBorderColor rounded-[12px] px-[3.5rem] py-[4.5rem]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-textSecondaryColor"
      >
        <div className="flex flex-col gap-[14px] ">
          <label htmlFor="email">Email Address </label>

          <input
            {...register("email")}
            placeholder="Enter your email address"
            className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] pl-[32px] p-[8px] focus:bg-overlaySurfaceColor text-textSecondaryColor"
          />
          <img
            src="/public/icons/account.svg"
            alt=""
            className="w-[15px] h-[15px] relative top-[-42px] left-3"
          />
        </div>

        <div className="flex flex-col gap-[14px] ">
          <label htmlFor="password">Password </label>
          <input
            {...register("password")}
            placeholder="Enter Your Password"
            className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] pl-[32px] p-[8px] focus:bg-overlaySurfaceColor text-textSecondaryColor"
          />
          <img
            src="/public/icons/lock.svg"
            alt=""
            className="w-[15px] h-[15px] relative top-[-42px] left-3"
          />
        </div>

        <PrimaryButton value={"Authenticate Identity"} />
      </form>
      <p className="font-dmsans text-[14px] text-textSecondaryColor">
        Don't have an account?{" "}
        <Link to={appRoutes.Register} className="text-[#80A8FF] font-medium">
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
