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
    <div className="flex flex-col gap-3.5 ">
      <label htmlFor={name}>{label} </label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-88 bg-overlaySurfaceColor border border-strongBorderColor rounded-sm pl-8 p-2 placeholder:text-textTertiaryColor"
      />
      <img src={iconPath} alt="" className="w-4 h-4 relative -top-10.5 left-3" />
      <p className="text-red-500">{error?.message}</p>
    </div>
  );
};

export default InputField;
