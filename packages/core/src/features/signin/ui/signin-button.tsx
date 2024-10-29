// 'use client'

import React from "react";
import { Button, ButtonProps } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";

export interface SignInLinkProps extends ButtonProps {}

export const SignInButton = ({...props }: SignInLinkProps) => {
  const t = useTranslations('home');
  return (
    <Button
      {...props}
      onClick={() => signIn('codis')}
      size="md"
      radius="full"
      color="primary"
      variant="shadow"
    >
      {t('signin')}
    </Button>
  );
};
