import { useFormStatus } from "react-dom";

export default function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
      <button className="mt-16 rounded-md p-3 w-full text-black bg-white font-bold" aria-disabled={pending}>
        Log in
      </button>
    );
  }