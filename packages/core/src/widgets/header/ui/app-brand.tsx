import React from "react";

import { NavbarBrand } from "@nextui-org/navbar";
import { LogoIcon } from "@@/shared/ui/Icons/brand";
import { Link } from "@nextui-org/link";

export const AppHeaderBrand: React.FC = () => {
  return (
    <NavbarBrand>
      <Link
        color="foreground"
        showAnchorIcon
        href="/"
        anchorIcon={<LogoIcon />}
      />
    </NavbarBrand>
  );
};
