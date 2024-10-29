import { useTranslations } from "next-intl";

import { AuthHeader } from "@@/widgets/header";
import { AuthFooter } from "@@/widgets/footer";
import { SignUpCard } from "./signup-card";

export const SignUpPage = () => {
  return <SignUpCard />;
};
