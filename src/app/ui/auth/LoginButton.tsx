import { useFormStatus } from "react-dom";

export default function LoginButton() {
    const { pending } = useFormStatus();
   
    return (
      <button className="mt-4 bg-blue-400 rounded-md p-4 w-full" aria-disabled={pending}>
        Log in
      </button>
    );
  }