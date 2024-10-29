"use client";

import { CodisErrorPage } from "@codis/core/shared";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <CodisErrorPage code={500} message={error.message} reset={reset} />;
}
