import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { appRoutes } from "../../routes/routes";

const PersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onsubmit() {}
  return (
    <div className="flex flex-col">
      <h2 className="poppins-bold text-[20px]">Personal Information</h2>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-wrap">
        <label htmlFor="firstName">First Name </label>
        <input {...register("firstName")} />

        <label htmlFor="lastName">Last Name </label>
        <input {...register("lastName")} />

        <label htmlFor="email">Email Address </label>
        <input {...register("email")} />

        <Link to={appRoutes.Login}>Back to Login</Link>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default PersonalInfo;
