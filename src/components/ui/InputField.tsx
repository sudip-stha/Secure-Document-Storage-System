import type { InputFieldType } from "../../types/data";

const InputField = ({
  label,
  name,
  type,
  register,
  placeholder,
  error,
  iconPath,
}: InputFieldType) => {
  return (
    <div className="flex flex-col gap-[14px] ">
      <label htmlFor={name}>{label} </label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-[19.1rem] bg-overlaySurfaceColor border border-strongBorderColor rounded-[4px] pl-[32px] p-[8px]"
      />
      <img
        src={iconPath}
        alt=""
        className="w-[15px] h-[15px] relative top-[-42px] left-3"
      />
      <p className="text-red-500">{error?.message}</p>
    </div>
  );
};

export default InputField;
