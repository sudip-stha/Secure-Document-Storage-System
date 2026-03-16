import LoginCard from "../../components/Login/LoginCard";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="flex flex-col gap-12 items-center ">
        <div className="flex flex-col gap-2 items-center ">
          <h1 className="text-white font-poppins font-bold text-[24px]">
            SECURE<span className="text-[#4D82FF] ">VAULT</span>
          </h1>
          <p className="font-dmsans text-[16px] text-textSecondaryColor">
            Sign in to access the vault
          </p>
        </div>
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
