import PersonalInfo from "../components/Register/PersonalInfo";

const Register = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className="flex flex-col items-center">
        <h1 className="poppins-bold text-[24px]">Register Your Account</h1>
        <p className="dm-sans-regular text-[16px] text-secondary-color">
          Create an account (Admin Approval Required)
        </p>
        <div className="progress">
          <ol>
            <li>
              <input type="radio" name="personal" value="personal" /> Personal
            </li>
            <li>
              <input type="radio" name="security" value="security" />
              Security
            </li>
            <li>
              <input type="radio" name="verification" value="verification" />
              Verification
            </li>
          </ol>
        </div>
        <PersonalInfo />
      </div>
    </div>
  );
};

export default Register;
