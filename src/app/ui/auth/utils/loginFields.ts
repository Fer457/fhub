export interface LoginFields {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  labelTx?: string;
  required: boolean;
  icon?: string;
}

export const loginInputFields: LoginFields[] = [
  {
    placeholder: "Enter your email",
    type: "email",
    name: "email",
    id: "email",
    required: true,
    icon: "EmailIcon.png"
  },
  {
    placeholder: "Enter your password",
    type: "password",
    name: "password",
    id: "password",
    required: true,
    icon:"PasswordIcon.png"
  },
];
