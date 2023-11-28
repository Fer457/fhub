const LandingPageContent: React.FC = () => {
  return (
    <div className="flex flex-col space-y-6">
      <h1 className="text-6xl text-[#f3f3f3]">
        <span className="bg-gradient-to-br from-[#5b37eb] to-[#37eba9] bg-clip-text text-transparent">
          Fhub-client
        </span>
        , a simple social network.
      </h1>
      <h2 className="text-lg px-20 text-[#949494]">
        Join our vibrant community of passionate individuals who love to
        connect, share, and engage. Discover a platform where you can post your
        thoughts, experiences, and stories while connecting with like-minded
        individuals from around the world. Start sharing your journey today!
      </h2>
    </div>
  );
};

export default LandingPageContent;
