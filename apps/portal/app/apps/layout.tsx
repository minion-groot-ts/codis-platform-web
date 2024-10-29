import React from "react";

import { AppLayout } from "@codis/core/widgets";
// import { sectionItems, workspaces } from "./(items)/example";
import { workspaceItems } from './(items)';
import { auth } from "@/auth";

export default async function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  console.log(session);
  const workspaces =await workspaceItems();
  return (
    <AppLayout
      copyright="Codislab Inc."
      profile={session?.user}
      workspaces={workspaces}
    >
      {children}
    </AppLayout>
  );
}
