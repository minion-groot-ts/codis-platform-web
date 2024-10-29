import { AuthHeader, AuthFooter } from "@codis/core/widgets";

export default function AuthPage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AuthHeader />
      <section className="flex flex-col flex-grow items-center justify-center mx-16">
        {children}
      </section>
      <AuthFooter />
    </>
  );
}
