'use client';

import { Link } from "@nextui-org/link";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";
import { Switch } from "@nextui-org/switch";
import { AppleIcon, CodisDividerWithText, EmailInput, GithubIcon, GoogleIcon, PasswordInput } from "@@/shared";
import { ProviderButton } from "@@/features/signin";

export const SignInCard = () => {
  const t = useTranslations('auth.signin');

  return (
    <Card className="p-8 max-w-xl">
      <CardHeader className="flex-col gap-2">
        <div>
          <p className="text-2xl">{t('caption')}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-small text-default-500">{t('noAccount')}</p>
          <Link href="/auth/signup" className="text-small text-primary">{t('signup')}</Link>
        </div>
      </CardHeader>
      <CardBody className="p-2 gap-4 text-xs">
        <ProviderButton provider='github' children={t('provider', { name: 'GitHub' })} startContent={<GithubIcon />} />
        <ProviderButton provider='apple' children={t('provider', { name: 'Apple' })} startContent={<AppleIcon />} />
        <ProviderButton provider='google' children={t('provider', { name: 'Google' })} startContent={<GoogleIcon />} />
        <CodisDividerWithText text={t('divider')} />
        <EmailInput name="login" domain="codislab.com" placeholder={t('email')} />
        <PasswordInput name="password" placeholder={t('password')} />
      </CardBody>

      <CardFooter className="flex-col gap-6">
        <div className="flex flex-row justify-between w-full">
          <Switch size="sm">{t('remember')}</Switch>
          <Link size="sm" href="/auth/forgot">{t('forgot')}</Link>
        </div>
        <Button
          fullWidth
          size="md"
          radius="full"
          color="primary"
          variant="shadow"
        >
          {t('submit')}
        </Button>
      </CardFooter>
    </Card>
  );
};
