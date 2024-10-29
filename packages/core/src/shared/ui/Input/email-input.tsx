import React from "react";
import { Input, InputProps } from "@nextui-org/input";
import { MailIcon } from "@@/shared/ui/Icons";

export interface EmailInputProps extends InputProps {
  domain?: string;
}
export const EmailInput = ({ domain, ...props }: EmailInputProps) => {
  const endContent = (domain: string | undefined) => {
    return domain ? (
      <div className="pointer-events-none flex items-center">
        <span className="text-default-400 text-small">@{domain}</span>
      </div>
    ) : null;
  };
  return (
    <Input
      {...props}
      size="md"
      radius="lg"
      variant="bordered"
      className="max-w-md text-base"
      fullWidth
      startContent={
        <MailIcon className="text-xl text-default-400 pointer-events-none flex-shrink-0" />
      }
      endContent={endContent(domain)}
    />
  );
};
