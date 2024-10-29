import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
import NextAuthConfig, { publicPages } from "@codis/app-config/auth";
import { locales } from "@codis/app-config";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...NextAuthConfig,
  // adapter: PrismaAdapter(prisma),
  callbacks: {
    authorized: async ({ request, auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page

      const publicPathNameRegex = RegExp(
        `^(/(${locales.join("|")}))?(${publicPages
          .flatMap((p) => (p === "/" ? ["", "/"] : p))
          .join("|")})/?$`,
        "i"
      );

      const { nextUrl } = request;

      const isAuthenticated = !!auth;

      const isPublicPage = publicPathNameRegex.test(nextUrl.pathname);

      return isPublicPage || isAuthenticated;
    },
    async signIn({ account, profile }) {
      // if (account?.provider === "google") {
      //   return profile?.email_verified && profile.email?.endsWith("@codis.dev");
      // }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
    jwt({ token, user, account }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
      }

      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      if (token?.accessToken) {
        session.accessToken = token.accessToken as string;
      }

      return session;
    },
  },
});
