import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalSchema, type PersonalData } from "../../lib/schema";
import PrimaryButton from "../ui/Buttons/PrimaryButton";
import type { NextBtnType } from "../../types/data";
import InputField from "../ui/InputField";

const PersonalInfo = ({ next }: NextBtnType) => {
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

  function onsubmit(data: PersonalData) {
    next();
    console.log(data);
  }
  return (
    <div className="flex gap-10 flex-col w-204 bg-raisedSurfaceColor border border-strongBorderColor rounded-xl p-10">
      <h2 className="font-var(--font-poppins) font-bold text-[20px] text-white">
        Personal Information
      </h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="font-dmsans text-[14px]"
      >
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-textSecondaryColor">
          <InputField
            label="First name"
            name="firstName"
            type="text"
            register={register}
            placeholder="Enter your First name"
            error={errors.firstName}
            iconPath="/icons/account.svg"
          />

          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            register={register}
            placeholder="Enter your Last name"
            error={errors.lastName}
            iconPath="/icons/account.svg"
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            register={register}
            placeholder="Enter your email address"
            error={errors.email}
            iconPath="/icons/emailIcon.svg"
          />
        </div>

        <div className="flex justify-between mt-[1.6rem]">
          <Link
            to={appRoutes.Login}
            className=" flex items-center gap-3 text-textSecondaryColor"
          >
            <img src="/icons/leftArrow.svg" alt="" className="w-3" />
            Back to Login
          </Link>
          <PrimaryButton
            value={"continue"}
            iconPath={"/icons/rightArrow.svg"}
          />
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
