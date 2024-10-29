"use client";

import React from "react";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";

import { AppHeaderBrand } from "./app-brand";
import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger } from "@nextui-org/popover";
import { MenuIcon } from "@@/shared/ui/Icons";
import { LocaleSwitch } from "@@/widgets/locale";
import { useTheme } from "next-themes";
import AppBurgerContent from "./app-burger";

export const AuthHeader = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Navbar
      isBordered
      isBlurred
      maxWidth="full"
      position="sticky"
      className={resolvedTheme === "light" ? "bg-white" : ""}
    >
      <NavbarContent>
        <Popover
          offset={10}
          placement="bottom-start"
          backdrop="transparent"
          className="max-w-md max-h-12"
        >
          <PopoverTrigger>
            <Button isIconOnly className="bg-background">
              <MenuIcon size={32} />
            </Button>
          </PopoverTrigger>
          <AppBurgerContent />
        </Popover>
        <AppHeaderBrand />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LocaleSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
