import LoginForm from "@/app/ui/auth/LoginForm";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center md:h-screen text-white">
      <div className="relative mx-auto flex w-full max-w-[500px] flex-col space-y-2.5 p-4 md:-mt-32">
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
