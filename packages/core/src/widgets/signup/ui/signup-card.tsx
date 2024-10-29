"use client";

import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Button } from "@nextui-org/button";
import { useTranslations } from "next-intl";

import { SignInLink, ProviderButton } from "@@/features/signin"
import { AppleIcon, EmailInput, GithubIcon, GoogleIcon, PasswordInput } from "@@/shared";

export const SignUpCard = () => {
  const t = useTranslations("auth.signup");

  return (
    <Card className="p-8 max-w-xl">
      <CardHeader className="flex-col gap-2">
        <div>
          <p className="text-2xl">{t("caption")}</p>
        </div>
        <div className="flex flex-row gap-2">
          <p className="text-small text-default-500">{t("hasAccount")}</p>
          <SignInLink />
        </div>
      </CardHeader>
      <CardBody className="p-2 gap-4 text-xs">
        <ProviderButton
          provider="github"
          children={t("provider", { name: "GitHub" })}
          startContent={<GithubIcon />}
        />
        <ProviderButton
          provider="apple"
          children={t("provider", { name: "Apple" })}
          startContent={<AppleIcon />}
        />
        <ProviderButton
          provider="google"
          children={t("provider", { name: "Google" })}
          startContent={<GoogleIcon />}
        />
        <Divider />
        <EmailInput domain="codislab.com" placeholder={t("email")} />
        <PasswordInput
          name="password-master"
          placeholder={t("password.master")}
        />
        <PasswordInput
          name="password-slave"
          placeholder={t("password.slave")}
        />
      </CardBody>

      <CardFooter className="flex-col gap-6">
        <Button
          fullWidth
          size="md"
          radius="full"
          color="primary"
          variant="shadow"
        >
          {t("submit")}
        </Button>
      </CardFooter>
    </Card>
  );
};
