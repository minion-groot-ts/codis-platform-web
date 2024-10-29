import { SidebarItem } from "@codis/core/shared";
import { getTranslations } from "next-intl/server";

export const sectionAdminItems = async (): Promise<SidebarItem[]> => {
  const t = await getTranslations("platforma.workspaces.admin.items");

  return [
    {
      key: "security",
      title: t("security.title"),
      items: [
        {
          key: "users",
          href: "/apps/security/users",
          icon: "solar:chart-outline",
          title: t("security.users"),
        },
        {
          key: "roles",
          href: "/apps/security/roles",
          icon: "solar:gift-linear",
          title: t("security.roles-sys"),
        },
        {
          key: "expenses",
          href: "/apps/security/roles",
          icon: "solar:bill-list-outline",
          title: t("security.roles-business"),
        },
      ],
    },
    {
      key: "email",
      title: t("email.title"),
      items: [
        {
          key: "email-service",
          href: "/apps/email",
          icon: "solar:chart-outline",
          title: t("email.service"),
        },
        {
          key: "email-account",
          href: "/apps/email",
          icon: "solar:gift-linear",
          title: t("email.account"),
        },
      ],
    },
  ];
};
