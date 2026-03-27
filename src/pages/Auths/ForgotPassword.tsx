import { useForm } from "react-hook-form";
import { loginSchema, type LoginData } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/Button/Button";
import Heading1 from "../../components/ui/Heading1";

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
        <Heading1 value="Forgot your Password?" />
        <div className="flex gap-5 flex-col bg-raised-surface border border-strong-border rounded-xl px-14 py-12">
          <p className="font-dmsans font-medium text-[14px] text-text-primary w-[24rem]">
            Please enter your email address again to reset the password
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col text-text-secondary"
          >
            <div className="flex flex-col gap-3.5 ">
              <label htmlFor="email">Email Address </label>
              <input
                type="email"
                {...register("email")}
                placeholder="Enter your email address"
                className="w-[24rem] bg-overlay-surface border border-strong-border rounded-sm pl-8 p-2 placeholder:text-text-tertiary"
              />
              <img
                src="/icons/emailIcon.svg"
                alt=""
                className="w-4 h-4 relative -top-10.5 left-3"
              />
              <p className="text-red-500">{errors.email?.message}</p>
            </div>
            <Button variant="primary" size={"md"}>
              Reset Password
            </Button>
          </form>
          <Button variant={"secondary"} size={"md"}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
