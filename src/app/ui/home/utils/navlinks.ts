export interface navLink {
  name: string;
  href: string;
  icon: string;
}

export const navLinks: navLink[] = [
  { name: "Home", href: "/home", icon: "/assets/icons/HomeIcon.png" },
  {
    name: "All posts",
    href: "/home/posts",
    icon: "/assets/icons/PostsIcon.png",
  },
  { name: "Chat", href: "/home/chat", icon: "/assets/icons/ChatIcon.png" },
];
