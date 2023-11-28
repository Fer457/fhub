const LandingPageButtons: React.FC = () => {
  return (
    <div className="flex flex-row space-x-12">
      <button
        className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900
        rounded-lg group bg-gradient-to-br from-[#5b37eb] to-[#37eba9] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white
      dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-3 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Get started
        </span>
      </button>
      <button
        type="button"
        className="text-fontDark-50 hover:text-white border-2 border-fontDark-50 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-gray-300
        font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"
      >
        Log in
      </button>
    </div>
  );
};

export default LandingPageButtons;
