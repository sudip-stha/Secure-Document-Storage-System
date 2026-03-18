import type { FieldValues } from "react-hook-form";
import type { InputFieldType } from "../../types/data";

const InputField = <T extends FieldValues>({
  label,
  name,
  type,
  register,
  placeholder,
  error,
  iconPath,
}: InputFieldType<T>) => {
  return (
    <div className="flex flex-col gap-3.5 relative ">
      <label htmlFor={name}>{label} </label>
      <input
        type={type}
        {...register(name)}
        placeholder={placeholder}
        className="w-88 bg-overlay-surface border border-strong-border rounded-sm pl-8 p-2 placeholder:text-text-tertiary"
      />
      <img
        src={iconPath}
        alt=""
        className="w-3.5 h-3.5 absolute top-11.5 left-3"
      />
      <p className="text-red-500">{error?.message}</p>
    </div>
  );
};

export default InputField;
