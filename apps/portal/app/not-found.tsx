import { CodisErrorPage } from "@codis/core/shared";

export default function NotFound() {
  return <CodisErrorPage code={404} />;
}
