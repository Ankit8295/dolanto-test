import { ReactNode } from "react";
import ContextProvider from "./context-provider/ContextProvider";

export default function Provider({ children }: { children: ReactNode }) {
  return <ContextProvider>{children}</ContextProvider>;
}
