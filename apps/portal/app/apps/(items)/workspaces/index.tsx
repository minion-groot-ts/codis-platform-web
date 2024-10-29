import { Workspace } from "@codis/core/widgets";
import { getTranslations } from "next-intl/server";
import { sectionAdminItems } from "./sidebar/admins";
import { sectionConsumerItems } from "./sidebar/consumer";

export const workspaceItems = async (): Promise<Workspace[]> => {
  const t = await getTranslations("platforma.workspaces");

  return [
    {
      value: "3",
      label: "Codislab Inc.",
      items: [
        {
          value: "1",
          label: t("platforma.label"),
          items: await sectionAdminItems(),
        },
        {
          value: "2",
          label:  t("consumer.label"),
          items: sectionConsumerItems,
        },
        {
          value: "3",
          label: t("admin.label"),
          items: await sectionAdminItems(),
        },
      ],
    },
  ];
};
