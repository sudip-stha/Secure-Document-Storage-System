import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalSchema, type PersonalData } from "../../lib/schema";
import PrimaryButton from "../ui/Buttons/PrimaryButton";

const PersonalInfo = ({ next }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalData>({
    resolver: zodResolver(personalSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  function onsubmit() {
    next();
  }
  return (
    <div className="flex gap-[2.5rem] flex-col w-[45.1rem] bg-raisedSurfaceColor border border-strongBorderColor rounded-[12px] p-[2.5rem]">
      <h2 className="font-poppins font-bold text-[20px] text-white">
        Personal Information
      </h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="font-dmsans text-[14px]"
      >
        <div className="flex flex-wrap gap-x-[1.75rem] gap-y-[1rem] text-textSecondaryColor">
          <div className="flex flex-col gap-[14px] ">
            <label htmlFor="firstName">First Name </label>
            <input
              {...register("firstName")}
              placeholder="Enter your First name"
              className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] p-[8px]"
            />
            <p className="text-red-500">{errors.firstName?.message}</p>
          </div>

          <div className="flex flex-col gap-[14px]">
            <label htmlFor="lastName">Last Name </label>
            <input
              {...register("lastName")}
              placeholder="Enter your Last name"
              className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] p-[8px]"
            />
            <p className="text-red-500">{errors.lastName?.message}</p>
          </div>

          <div className="flex flex-col gap-[14px]">
            <label htmlFor="email">Email Address </label>
            <input
              {...register("email")}
              placeholder="Enter your email address"
              className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] p-[8px]"
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
        </div>

        <div className="flex justify-between mt-[1.6rem]">
          <Link
            to={appRoutes.Login}
            className=" flex items-center gap-[11px] text-textSecondaryColor"
          >
            <img
              src="/public/icons/leftArrow.svg"
              alt=""
              className="w-[13px]"
            />
            Back to Login
          </Link>
          <PrimaryButton
            value={"continue"}
            iconPath={"/public/icons/rightArrow.svg"}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
