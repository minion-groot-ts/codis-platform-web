"use client";

import React from "react";

import { Icon } from "@iconify/react";

import { useMediaQuery } from "usehooks-ts";

import { cn } from "@nextui-org/theme";

import { Spacer } from "@nextui-org/spacer";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import type { Workspace } from "@@/shared/ui";
import {
  Sidebar,
  SidebarItem,
  ThemeSwitchTab,
  LogoIcon,
  Workspaces,
} from "@@/shared/ui";
import { PlatformaHeader } from "@@/widgets";
import { Profile } from "next-auth";

import { SharedSelection } from "@nextui-org/system";
import { signOut } from "next-auth/react";

import { useLocale, useTranslations } from "next-intl";

interface AppLayoutProps {
  copyright: string;
  profile: Profile;
  defaultWorkspace: string;
  workspaces: Workspace[];
  children: React.ReactNode;
}

export default function AppLayout({
  copyright,
  profile,
  defaultWorkspace,
  workspaces,
  children,
}: AppLayoutProps) {
  if (!profile) return null;

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const [sidebarItem, setSidebarItem] = React.useState<SidebarItem[]>([]);

  const workspaceChange = (items: SidebarItem[]): void => {
    setSidebarItem(items);
  };

  const isMobile = useMediaQuery("(max-width: 768px)");

  const isCompact = isCollapsed || isMobile;

  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  const locale = useLocale();
  const t = useTranslations("platforma.layout");

  return (
    <div className="flex h-dvh w-full">
      <div
        className={cn(
          "relative flex h-full w-72 flex-col !border-r-small border-divider p-4 transition-width",
          {
            "w-16 items-center px-2 py-4": isCompact,
          }
        )}
      >
        <div
          className={cn("flex items-center gap-3 px-3", {
            "justify-center gap-0": isCompact,
          })}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full">
            <Button isIconOnly size="md" variant="light" onPress={onToggle}>
              <Icon icon="stash:burger-classic" height={32} width={32} />
            </Button>
          </div>
          <span
            className={cn("text-small font-bold uppercase opacity-100 pl-2", {
              "w-0 opacity-0": isCompact,
            })}
          >
            <Link
              color="foreground"
              showAnchorIcon
              href="/"
              anchorIcon={<LogoIcon />}
            />
          </span>
        </div>

        <Spacer y={6} />

        <Workspaces
          onWorkspaceChange={workspaceChange}
          copyright={copyright}
          isCompact={isCompact}
          defaultItem="3"
          items={workspaces}
        />
      
        <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
          <Sidebar isCompact={isCompact} items={sidebarItem} locale={locale} />
        </ScrollShadow>

        <Spacer y={2} />

        <div
          className={cn("mt-auto flex flex-col", {
            "items-center": isCompact,
          })}
        >
          <Tooltip
            content={t("help")}
            isDisabled={!isCompact}
            placement="right"
          >
            <Button
              fullWidth
              className={cn(
                "justify-start truncate text-default-500 data-[hover=true]:text-foreground",
                {
                  "justify-center": isCompact,
                }
              )}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none text-default-500"
                    icon="solar:info-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
            >
              {isCompact ? (
                <Icon
                  className="text-default-500"
                  icon="solar:info-circle-line-duotone"
                  width={24}
                />
              ) : (
                t("help")
              )}
            </Button>
          </Tooltip>

          <Tooltip
            content={t("logout")}
            isDisabled={!isCompact}
            placement="right"
          >
            <Button
              onClick={() =>
                signOut({
                  redirectTo: "/",
                })
              }
              className={cn(
                "justify-start text-default-500 data-[hover=true]:text-foreground",
                {
                  "justify-center": isCompact,
                }
              )}
              isIconOnly={isCompact}
              startContent={
                isCompact ? null : (
                  <Icon
                    className="flex-none rotate-180 text-default-500"
                    icon="solar:minus-circle-line-duotone"
                    width={24}
                  />
                )
              }
              variant="light"
            >
              {isCompact ? (
                <Icon
                  className="rotate-180 text-default-500"
                  icon="solar:minus-circle-line-duotone"
                  width={24}
                />
              ) : (
                t("logout")
              )}
            </Button>
          </Tooltip>
        </div>

        <Spacer y={2} />

        <div
          className={cn(
            "mt-auto flex flex-col items-center border-t-small border-t-divider pt-4",
            {
              "items-center hidden": isCompact,
            }
          )}
        >
          <ThemeSwitchTab />
        </div>
      </div>
      <div className="w-full flex-1 flex-col">
        <PlatformaHeader profile={profile} />
        <main className="h-[90%] w-full overflow-visible">
          <div className="flex h-[90%] w-full flex-col gap-4 ">{children}</div>
        </main>
      </div>
    </div>
  );
}
