"use client";

import { PopoverContent } from "@nextui-org/popover";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { FaviconIcon } from "@@/shared/ui/Icons";
import { useTranslations } from "next-intl";

export default function AppBurgerContent() {
  const t = useTranslations("app.burger");

  return (
    <PopoverContent className="max-w-80">
      <header className="flex flex-wrap gap-3 rounded-medium border-small border-divider my-2 p-2 pl-4">
        <Card
          shadow="none"
          isHoverable
          key="platfrom"
          isPressable
          as={Link}
          href="/apps"
          className="p-0 w-20 h-20"
        >
          <CardBody className="items-center justify-center p-2">
            <FaviconIcon size={48} className="p-0" />
          </CardBody>
          <CardFooter className="items-center justify-center pb-2 font-semibold text-xs px-0">
            {t("platform")}
          </CardFooter>
        </Card>
      </header>
    </PopoverContent>
  );
}
