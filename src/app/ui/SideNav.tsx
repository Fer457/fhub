import { signOut } from "@/auth/auth";
import { auth } from "@/auth/auth";
import NavLinks from "./home/NavLinks";

export default async function SideNav() {
  const session = await auth();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-primary-100">
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="flex flex-row p-2 space-x-2 items-center mb-4">
          <img
            src={session?.user?.image as string}
            alt={session?.user?.name as string}
            className="rounded-full h-12 w-12"
          />
          <div className="flex flex-col text-sm">
            <h1 className="font-semibold">{session?.user?.name}</h1>
            <h2 className="text-fontDark-100">{session?.user?.email}</h2>
          </div>
        </div>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block text"></div>
        <form
        className="flex justify-end"
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="rounded-md p-2 hover:bg-black/50">
              <img
                src="/assets/icons/SignOutIcon.png"
                alt="sign out icon"
                className="h-6 w-6"
              />
          </button>
        </form>
      </div>
    </div>
  );
}
