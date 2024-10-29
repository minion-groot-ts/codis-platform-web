import "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   * Extended so I can guarantee I always have a userId :)
   */
  interface Session {
    userId: string;
    user: {
      id: string;
      provider: string;
    } & DefaultSession["user"];
    accessToken?: string;
  }
}

// declare module "next-auth/jwt" {
//   interface JWT {
//     accessToken?: string
//   }
// }

// export const { handlers, auth, signIn, signOut } = NextAuth(NextAuthConfig)