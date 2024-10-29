import { AppFooter, AppHeader, AppMainContainer } from "@codis/core/widgets";
import { HomePage } from "~/pages/home";
import { auth } from "@/auth";

export default async function Home(): Promise<React.JSX.Element> {
  const session = await auth();
  return (
    <>
      <AppHeader profile={session?.user}/>
      <AppMainContainer>
        <HomePage />
        {/* {React.createElement("div", null, children)} */}
      </AppMainContainer>
      <AppFooter />
    </>
  );
}
