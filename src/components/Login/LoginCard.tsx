import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import { loginSchema, type LoginData } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../ui/Button/Button";

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
    <div className="flex gap-18 flex-col items-center bg-raised-surface border border-strong-border rounded-xl px-14 py-13">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 text-text-secondary"
      >
        <div className="flex flex-col gap-3.5 relative ">
          <label htmlFor="email">Email Address </label>
          <input
            type="email"
            {...register("email")}
            placeholder="Enter your email address"
            className="w-[24rem] bg-overlay-surface border border-strong-border rounded-sm pl-8 p-2 placeholder:text-text-tertiary"
            onInvalid={(e) =>
              (e.target as unknown as HTMLInputElement).setCustomValidity(
                "The email address provided is wrong",
              )
            }
          />
          <img
            src="/icons/emailIcon.svg"
            alt=""
            className="w-3.5 h-3.5 top-13 left-3 absolute"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col gap-3.5 relative ">
          <label htmlFor="password">Password </label>
          <input
            {...register("password")}
            type="password"
            placeholder="Enter Your Password"
            className="w-[24rem] bg-overlay-surface border border-strong-border rounded-sm pl-8 p-2 placeholder:text-text-tertiary"
          />

          <Link
            to={appRoutes.ForgotPassword}
            className="font-dmsans text-[12px] underline self-end text-[#80A8FF]"
          >
            Forgot Password?
          </Link>
          <img
            src="/icons/lock.svg"
            alt=""
            className="w-4 h-4 absolute top-13 left-3"
          />
          <p className="text-red-500 mb-6">{errors.password?.message}</p>
        </div>

        <Button size={"md"} >
          Authenticate Identity
        </Button>
      </form>
      <p className="font-dmsans text-[14px] text-text-secondary">
        Don't have an account?{" "}
        <Link to={appRoutes.Register} className="text-[#80A8FF] font-medium">
          Register Now
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
