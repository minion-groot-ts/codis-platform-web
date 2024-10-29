'use client'

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import { useMediaQuery } from "usehooks-ts";

interface AppUserAvatarProps {
  profile: Record<string, any>;
}

export const UserAvatarMenu = ({ profile }: AppUserAvatarProps) => {
  const t = useTranslations("profile");
  const isMobile = useMediaQuery("(max-width: 768px)");
console.log(isMobile);

  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description={!isMobile ? profile.email : null}
            name={!isMobile ? profile.name : null}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2" showDivider>
            <p className="font-bold">{t("signas")}</p>
            <p className="font-bold">{profile.email}</p>
          </DropdownItem>
          <DropdownItem key="settings">{t("settings")}</DropdownItem>
          <DropdownItem key="analytics">{t("analytics")}</DropdownItem>
          <DropdownItem key="system">{t("system")}</DropdownItem>
          <DropdownItem key="configurations">
            {t("configurations")}
          </DropdownItem>
          <DropdownItem key="help_and_feedback">
            {t("help_and_feedback")}
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="primary"
            onClick={() =>
              signOut({
                redirectTo: "/",
              })
            }
          >
            {t("logout")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
