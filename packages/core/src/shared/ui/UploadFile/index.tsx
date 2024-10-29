import type { ButtonProps as NextUIButtonProps } from "@nextui-org/button";

import { Button as NextUIButton } from "@nextui-org/button";
import { Link as NextUILink } from "@nextui-org/link";

export interface CodisUploadFileProps extends NextUIButtonProps {}

export const CodisUploadFile = ({
  children,
  ...props
}: CodisUploadFileProps): React.JSX.Element => {
  return (
    <NextUIButton
      {...props}
      as={NextUILink}
      className="text-sm"
      variant="light"
    >
      {children}
    </NextUIButton>
  );
};
