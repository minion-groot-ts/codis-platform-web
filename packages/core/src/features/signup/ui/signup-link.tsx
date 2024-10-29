import React from "react";
import { Button, ButtonProps } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useTranslations } from "next-intl";

export interface SignUpLinkProps extends ButtonProps {}

export const SignUpLink = ({...props }: SignUpLinkProps) => {
  const t = useTranslations('home');
  return (
    <Button
      {...props}
      href="/auth/signup"
      as={Link}
      size="md"
      radius="full"
      variant="light"
    >
      {t('signup')}
    </Button>
  );
};
