import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

const appAge = (startYear: number = 2024) => {
  const currentYear: number = new Date().getFullYear();

  return startYear === currentYear
    ? currentYear
    : `${startYear}-${currentYear}`;
};

export const AppCopyright = (): React.JSX.Element => {
  const t = useTranslations("app.copyright");

  return (
    <Link
      isExternal
      className="flex gap-1 items-center text-current"
      href={t("site.url")}
      title={t("site.title")}
    >
      <span className="text-sm">© {appAge()}</span>
      <p className="text-sm font-bold text-primary">{t("name")}</p>
    </Link>
  );
};
