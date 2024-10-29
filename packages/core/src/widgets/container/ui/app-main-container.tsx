import React from "react";

export type AppMainContainerProps = {
  children: React.ReactNode;
};

export const AppMainContainer = ({ children }: AppMainContainerProps): React.JSX.Element => {
  return (
    <main className="max-w-full max-h-full flex-grow bg-default-50">
      {children}
    </main>
  );
};
