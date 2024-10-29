import {
  Divider as NextUIDivider,
  DividerProps as NextUIDividerProps,
} from "@nextui-org/divider";

export interface CodisDividerProps extends NextUIDividerProps {}

export interface CodisDividerWithTextProps extends NextUIDividerProps {
  text?: string;
}

export const CodisDivider = (props: CodisDividerProps): React.JSX.Element => {
  return <NextUIDivider {...props} />;
};

export const CodisDividerWithText = ({ text }: CodisDividerWithTextProps): React.JSX.Element => {
  return (
    <div className="flex items-center">
      <hr className="flex-grow border-t border-gray-300" />
      <span className="px-3 text-gray-500">{text}</span>
      <hr className="flex-grow border-t border-gray-300" />
    </div>
  );
};
