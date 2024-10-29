"use client";

import React from "react";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";

import { AppHeaderBrand } from "./app-brand";
import { Button } from "@nextui-org/button";
import { Popover, PopoverTrigger } from "@nextui-org/popover";
import { MenuIcon } from "@@/shared/ui/Icons";
import { LocaleSwitch } from "@@/widgets/locale";
import { useTheme } from "next-themes";
import { SignInButton } from "@@/features/signin";
import { SignUpLink } from "@@/features/signup";
import { UserAvatarMenu } from "@@/widgets/profile";
import { User } from "next-auth";
import AppBurgerContent from "./app-burger";

interface AppHeaderProps {
  profile: User;
  menuItems?: string[];
}

export const AppHeader = ({ profile, menuItems = [] }: AppHeaderProps) => {
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
          {!profile ? (
            <>
              <SignUpLink className="m-3" />
              <SignInButton className="m-3 px-10" />
            </>
          ) : null}
          <LocaleSwitch />
        </NavbarItem>
        {profile ? (
          <NavbarItem>
            <UserAvatarMenu profile={profile} />
          </NavbarItem>
        ) : null}
      </NavbarContent>
    </Navbar>
  );
};
