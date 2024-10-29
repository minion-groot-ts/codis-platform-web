import React from "react";

import { HomeAppsList } from "./home-apps";
import { HomeBanner } from "./home-banner";

export default function HomePage() {
  return (
    <section className="flex flex-col flex-grow h-full justify-center">
        <HomeBanner />
        <HomeAppsList />
    </section>
  );
}
