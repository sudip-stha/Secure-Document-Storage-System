import { useForm } from "react-hook-form";

const OrganizationDetails = () => {
     const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
  return (
    <div>
        <form onSubmit={handleSubmit(onsubmit)} className="">
        <label htmlFor="organization">Organization </label>
        <input {...register("organization")} />

        <label htmlFor="role">Role/Title </label>
        <input {...register("role")} />

        <label htmlFor="department">Department </label>
        <input {...register("department")} />

        <button type="submit">Continue</button>
      </form>
    </div>
  )
}

export default OrganizationDetails
