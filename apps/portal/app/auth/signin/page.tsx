import { SignInPage } from "@codis/core/widgets";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function SignIn(): Promise<React.JSX.Element> {
  const session = await auth();
console.log('SignIn -----> ',session);

  if (session?.user) {
    return redirect("/");
  }

  return <SignInPage />;
}
