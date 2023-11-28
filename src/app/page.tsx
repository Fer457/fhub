import LandingPageButtons from "./ui/landing/LandingPageButtons";
import LandingPageContent from "./ui/landing/LandingPageContent";
import LandingPageHeader from "./ui/landing/LandingPageHeader";

export default function Home() {
  return (
    <>
      <div className="heroBg"></div>
      <div>
        <LandingPageHeader />
        <main className="flex flex-col py-24 px-[30%] text-center items-center space-y-8">
          <LandingPageContent />
          <LandingPageButtons />
        </main>
      </div>
    </>
  );
}
