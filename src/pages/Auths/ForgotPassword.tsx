import { useForm } from "react-hook-form";
import { loginSchema, type LoginData } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryButton from "../../components/ui/Buttons/PrimaryButton";
import SecondaryButton from "../../components/ui/Buttons/SecondaryButton";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(data: LoginData) {
    console.log(data);
  }
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col gap-12 ">
        <h1 className="font-poppins font-bold text-[24px] text-white">
          Forgot your Password?
        </h1>
        <div className="flex gap-5 flex-col bg-raisedSurfaceColor border border-strongBorderColor rounded-xl px-14 py-12">
          <p className="font-dmsans font-medium text-[14px] text-textPrimaryColor w-[24rem]">
            Please enter your email address again to reset the password
          </p>
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
                src="/public/icons/emailIcon.svg"
                alt=""
                className="w-4 h-4 relative -top-10.5 left-3"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>

            <PrimaryButton value={"Reset Password"} />
          </form>
          <SecondaryButton value={"Go Back"} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
