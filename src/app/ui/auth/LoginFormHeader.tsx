const LoginFormHeader: React.FC = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img className="h-auto w-auto" src="/assets/icons/Logo.png" alt="" />
      </div>
      <div className="flex flex-col mb-8 space-y-2">
        <h1 className="mb-3 font-medium text-4xl">Login</h1>
        <h2 className="text-fontDark-100 text-sm">
          Acces your Fhub account by typing your username and password.
        </h2>
      </div>
    </div>
  );
};

export default LoginFormHeader;
