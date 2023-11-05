import { ReactNode } from "react";
import ContextProvider from "./context-provider/ContextProvider";
import { QueryProvider } from "./QueryProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <ContextProvider>{children}</ContextProvider>
    </QueryProvider>
  );
}
