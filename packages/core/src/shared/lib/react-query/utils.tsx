import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { render } from "@testing-library/react";

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

// export const renderWithClient = (ui: React.ReactElement) => {
//   const testQueryClient = createTestQueryClient();
//   const { rerender, ...result } = render(
//     <QueryClientProvider client={testQueryClient}>{ui}</QueryClientProvider>
//   );

//   return {
//     ...result,
//     /* c8 ignore start */
//     rerender: (rerenderUi: React.ReactElement) =>
//       rerender(
//         <QueryClientProvider client={testQueryClient}>
//           {rerenderUi}
//         </QueryClientProvider>
//       ),
//     /* c8 ignore stop */
//   };
// }

export const createWrapper = () => {
  const testQueryClient = createTestQueryClient();

  return function wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={testQueryClient}>
        {children}
      </QueryClientProvider>
    );
  };
};
