const LandingPageHeader: React.FC = () => {
  return (
    <header className="flex flex-row justify-between pt-6 px-36 items-center">
      <div className="flex flex-row items-center space-x-4">
        <img className="h-auto w-auto" src="/assets/icons/Logo.png" alt="main logo" />
        <h1 className="bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent text-4xl font-bold">
          fhub-client
        </h1>
      </div>
      <div className="flex flex-row space-x-8 font-medium text-[#A2A3A3]">
        <span className="hover:text-white cursor-pointer">Documentation</span>
        <span className="hover:text-white cursor-pointer">About us</span>
      </div>
    </header>
  );
};

export default LandingPageHeader;
