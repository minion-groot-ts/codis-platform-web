"use client"

import React from "react";
import { Button, ButtonProps } from "@nextui-org/button";
import { Providers } from "@codis/app-config";
import { signIn } from "next-auth/react";

export interface ProviderButtonProps extends ButtonProps {
  provider: Providers;
}

export const ProviderButton = ({ provider, ...props }: ProviderButtonProps) => {
  return (
    <Button
      {...props}
      onClick={() => signIn(provider)}
      fullWidth
      size="md"
      radius="lg"
      className="max-w-md justify-start"
      variant="bordered"
    />
  );
};
