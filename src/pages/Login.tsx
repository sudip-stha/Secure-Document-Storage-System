import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name: </label>
        <input {...register("name")} />

        <label htmlFor="password">Password: </label>
        <input {...register("password")} />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
