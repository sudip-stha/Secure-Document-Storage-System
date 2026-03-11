import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import { loginSchema, type LoginData } from "../../lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../ui/InputField";

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
    <div className="flex gap-[4.5rem] flex-col items-center bg-raisedSurfaceColor border border-strongBorderColor rounded-[12px] px-[3.5rem] py-[4.5rem]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-textSecondaryColor"
      >
        <InputField
          label="Email Address"
          name="email"
          type="email"
          register={register}
          placeholder="Enter your email address"
          error={errors.email}
          iconPath="/public/icons/emailIcon.svg"
        />

        <InputField
          label="Password"
          name="password"
          type="password"
          register={register}
          placeholder="Enter Your Password"
          error={errors.password}
          iconPath="/public/icons/lock.svg"
        />

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
