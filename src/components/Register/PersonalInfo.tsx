import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalSchema, type PersonalData } from "../../lib/schema";
import type { NextBtnType } from "../../types/data";
import InputField from "../ui/InputField";
import Button from "../ui/Button/Button";

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
    <div className="flex gap-10 flex-col w-204 bg-raised-surface border border-strong-border rounded-xl p-10">
      <h2 className="font-poppins font-bold text-[20px] text-white">
        Personal Information
      </h2>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="font-dmsans text-[14px]"
      >
        <div className="flex flex-wrap gap-x-7 gap-y-4 text-text-secondary">
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
            className=" flex items-center gap-3 text-text-secondary"
          >
            <img src="/icons/leftArrow.svg" alt="" className="w-3" />
            Back to Login
          </Link>
          <Button
            variant={"primary"}
            size={"sm"}
            iconPath={"/icons/rightArrow.svg"}
          >
            Continue
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
