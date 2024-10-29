// "use client";

// import React, { useEffect } from "react";

// export default function Error({
//   error,
//   reset,
// }: {
//   error: Error;
//   reset: () => void;
// }): React.JSX.Element {
//   useEffect(() => {
//     // Log the error to an error reporting service
//     /* eslint-disable no-console */
//     console.error(error);
//   }, [error]);

//   return (
//     <div>
//       <h2>Something went wrong!</h2>
//       <button
//         onClick={
//           // Attempt to recover by trying to re-render the segment
//           () => reset()
//         }
//       >
//         Try again
//       </button>
//     </div>
//   );
// }

"use client";

import { CodisErrorPage } from "@codis/core/shared";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <CodisErrorPage code={500} message={error.message} reset={reset} />;
}
