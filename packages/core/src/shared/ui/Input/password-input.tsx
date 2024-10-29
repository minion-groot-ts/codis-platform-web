import React from "react";
import { Input, InputProps } from "@nextui-org/input";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@@/shared/ui/Icons";

export const PasswordInput = (props: InputProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      {...props}
      fullWidth
      size="md"
      radius="lg"
      variant="bordered"
      className="max-w-md text-base"
      endContent={
        <button
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
    />
  );
};
