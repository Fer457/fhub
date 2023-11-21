"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLink, navLinks } from "./utils/navlinks";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col space-y-4">
      {navLinks.map((link: navLink) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium
               md:flex-none md:justify-start md:p-2 md:px-3 ${
                 link.href === pathname ? "text-white bg-black/60" : "hover:bg-primary-200 text-fontDark-100"
               }`}
          >
            <img
              src={link.icon}
              alt="sign out icon"
              className="h-6 w-6 hover:bg-sky-100"
            />
            <p className="hidden md:block ">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
