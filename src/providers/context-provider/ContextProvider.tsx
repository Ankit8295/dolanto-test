"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  useReducer,
  useContext,
} from "react";
import { reducer } from "./Reducer";
import { initialState } from "./initialState";
import { Actions, InitialState } from "@/src/utils/types";

const AppContext = createContext<InitialState>(initialState);

const DispatchContext = createContext<Dispatch<Actions>>(({}: Actions) => {});

export default function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
}

export const useAppState = () => useContext(AppContext);
export const useStateDispatch = () => useContext(DispatchContext);
