"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";
import LoginButton from "./LoginButton";
import LoginInput from "./LoginInput";
import { LoginFields, loginInputFields } from "./utils/loginFields";
import LoginFormHeader from "./LoginFormHeader";

export default function LoginForm() {
  const [state, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className="space-y-3">
      <div className="flex-1 rounded-lg bg-primary-100 p-12 border border-primary-200">
        <LoginFormHeader />
        <div className="w-full flex flex-col space-y-4">
          {loginInputFields.map((input: LoginFields, key: number) => {
            return <LoginInput {...input} key={key} />;
          })}
        </div>
        <LoginButton />
        {state === "CredentialsSignin" && (
          <div
            className="flex bg-red-500 items-end p-6 mt-4 rounded-lg border-2 border-red-900"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-sm text-white">Invalid credentials</p>
          </div>
        )}
      </div>
    </form>
  );
}
