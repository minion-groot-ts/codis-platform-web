import React, { ReactNode } from "react";

import { Link } from "@nextui-org/link";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { PopoverContent } from "@nextui-org/popover";
import type { IconSvgProps } from "@@/shared/lib/types";
import { ExcelIcon, GithubIcon, OneDriveIcon, OutlookIcon, PowerPointIcon, TeamsIcon, WordIcon } from "@@/shared/ui/Icons";

interface MenuItemProps {
  name: string;
  title: string;
  isDisabled?: boolean;
  isExternal?: boolean;
  url?: string;
}

interface AppMenuProps {
  menuItems: MenuItemProps[];
}

const MenuItemIcon = (name: string): React.FC<IconSvgProps> => {
  switch (name?.toLowerCase()) {
    case "onedrive":
      return OneDriveIcon;
    case "outlook":
      return OutlookIcon;
    case "excel":
      return ExcelIcon;
    case "powerpoint":
      return PowerPointIcon;
    case "word":
      return WordIcon;
    case "teams":
      return TeamsIcon;
    default:
      return GithubIcon;
  }
};

// const MenuItem = ({
//   name,
//   title,
//   url,
//   isDisabled = false,
//   isExternal = false,
// }: MenuItemProps): ReactNode => {
//   const ItemIcon = MenuItemIcon(name);

//   return (
//     <Card
//       as={Link}
//       href={url}
//       isExternal={isExternal}
//       isDisabled={isDisabled}
//       isPressable={!isDisabled}
//       isBlurred
//       radius="lg"
//       shadow="sm"
//       key={name}
//       className="m-2 w-28 h-28"
//     >
//       <CardBody className="overflow-visible p-2 items-center justify-end">
//         <ItemIcon size={48} />
//       </CardBody>
//       <CardFooter className="justify-center text-center text-sm font-semibold">
//         {title}
//       </CardFooter>
//     </Card>
//   );
// };

export const AppMenu: React.FC<AppMenuProps> = ({ menuItems }) => {
  return (
    menuItems.length> 0 ?
    <PopoverContent>
      <Card />
    </PopoverContent>
    :
    null
  );
};
