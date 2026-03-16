import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import { loginSchema, type LoginData } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginCard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: LoginData) {
    console.log(data);
  }
  return (
    <div className="flex gap-18 flex-col items-center bg-raisedSurfaceColor border border-strongBorderColor rounded-xl px-14 py-18">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-textSecondaryColor"
      >
        <div className="flex flex-col gap-3.5 ">
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email address"
            className="w-[24rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-sm pl-8 p-2 placeholder:text-textTertiaryColor"
          />
          <img
            src="/icons/emailIcon.svg"
            alt=""
            className="w-4 h-4 relative -top-10.5 left-3"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col gap-3.5 relative ">
          <label htmlFor="password">Password </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter Your Password"
            className="w-[24rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-sm pl-8 p-2 placeholder:text-textTertiaryColor"
          />

          <Link
            to={appRoutes.ForgotPassword}
            className="font-dmsans text-[12px] underline self-end text-[#80A8FF] mb-12"
          >
            Forgot Password?
          </Link>
          <img
            src="/icons/lock.svg"
            alt=""
            className="w-4 h-4 absolute top-13 left-3"
          />
          <p className="text-red-500">{errors.password?.message}</p>
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
