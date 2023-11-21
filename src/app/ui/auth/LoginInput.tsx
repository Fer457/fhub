import { LoginFields } from "./utils/loginFields";

const LoginInput: React.FC<LoginFields> = ({
  placeholder,
  id,
  name,
  required,
  type,
  icon
}) => {
  return (
    <>
      <div className="relative">
        <input
          className="peer block w-full rounded-md border border-primary-200 py-[9px] pl-10
          text-sm outline-2 placeholder:text-fontDark-100 bg-transparent focus:bg-black/50"
          id={id}
          type={type}
          name={name}
          placeholder={placeholder}
          required={required}
        />
        <img
          src={`/assets/icons/${icon}`}
          alt=""
          className="pointer-events-none absolute left-3 top-1/2 h-[20px] w-[20px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900"
        />
      </div>
    </>
  );
};

export default LoginInput;
