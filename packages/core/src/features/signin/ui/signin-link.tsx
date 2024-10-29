import React from "react";
import { useTranslations } from "next-intl";
import { signIn } from "next-auth/react";
import { Link } from "@nextui-org/link";

export const SignInLink = () => {
  const t = useTranslations('home');
  return (
    <Link
      href="#"
      size="sm"
      onClick={() => signIn('codis', {
        redirectTo: '/'
      })}
      color="primary"
    >
      {t('signin')}
    </Link>
  );
};
