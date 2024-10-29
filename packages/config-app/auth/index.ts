
import type { NextAuthConfig } from "next-auth"

import { Google } from "./providers/google";
import { GitHub } from "./providers/github";
import { Apple } from "./providers/apple";

export const providers = ['google', 'github', 'apple', 'codis'] as const;

export type Providers = (typeof providers)[number];

export const publicPages: string[] = [
  '/',
  '/manifest.webmanifest',
  '/auth/signin',
  '/auth/signup',
  '/auth/forgot'
];

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   callbacks: {
//     async signIn({ account, profile }) {
//       if (account && account.provider === "google") {
//         return profile?.email_verified && profile.email?.endsWith("@example.com")
//       }
//       return true // Do different verification for other providers that don't have `email_verified`
//     },
//   },
// });

export default {
  debug: process.env.NODE_ENV !== "production" ? true : false,
  providers: [GitHub, Google, Apple],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
  },
} satisfies NextAuthConfig
