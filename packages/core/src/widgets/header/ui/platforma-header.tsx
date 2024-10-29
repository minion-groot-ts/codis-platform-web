"use client";

import React from "react";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";

import { LocaleSwitch } from "@@/widgets/locale";
import { useTheme } from "next-themes";
import { UserAvatarMenu } from "@@/widgets/profile";
import { Profile } from "next-auth";
import { Button } from "@nextui-org/button";
import { MenuIcon, NotificationsCard } from "@@/shared/ui";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { Badge } from "@nextui-org/badge";
import { Icon } from "@iconify/react";
import AppBurgerContent from "./app-burger";

interface PlatformaHeaderProps {
  profile: Profile;
  menuItems?: string[];
  isMobile?: boolean;
}

export const PlatformaHeader = ({
  profile,
  menuItems = [],
  isMobile,
}: PlatformaHeaderProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Navbar
      isBordered
      isBlurred
      maxWidth="full"
      position="sticky"
      className={resolvedTheme === "light" ? "bg-white" : ""}
    >
      <NavbarContent justify="end">
        <NavbarItem>
          <LocaleSwitch />
        </NavbarItem>
        <NavbarItem>
          <Popover>
            <PopoverTrigger>
              <Button isIconOnly className="bg-background">
                <MenuIcon size={32} />
              </Button>
            </PopoverTrigger>
            <AppBurgerContent />
          </Popover>
        </NavbarItem>
        <NavbarItem>
          {/* Notifications */}
          <Popover offset={12} placement="bottom-start">
            <PopoverTrigger>
              <Button
                isDisabled
                disableRipple
                isIconOnly
                className="overflow-visible"
                radius="full"
                variant="light"
              >
                <Badge color="danger" content="5" showOutline={false} size="md">
                  <Icon
                    className="text-default-500"
                    icon="solar:bell-linear"
                    width={22}
                  />
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
              <NotificationsCard className="w-full shadow-none" />
            </PopoverContent>
          </Popover>
        </NavbarItem>
        <NavbarItem>
          <UserAvatarMenu profile={profile} />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
