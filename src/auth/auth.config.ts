import type { NextAuthConfig } from "next-auth";

interface CustomUserFields {
  customField1: string;
  customField2: number;
  // Add more custom fields as needed
}

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnHome = nextUrl.pathname.startsWith("/home");
      if (isOnHome) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/home", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
