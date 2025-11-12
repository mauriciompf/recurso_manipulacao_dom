import { createContext, useContext, useState } from "react";
import type { TabsContextType } from "../types/types";

const TabsContext = createContext<TabsContextType | null>(null);

function TabsContextProvider({ children }: { children: React.ReactNode }) {
  const [tabIndex, setTabIndex] = useState<number>(2);
  const [tabIndexInput, setTabIndexInput] = useState<number>(0);
  const [scriptInput, setScriptInput] = useState<string>("");
  const [shouldExecuteScript, setShouldExecuteScript] = useState(false);

  return (
    <TabsContext.Provider
      value={{
        tabIndex,
        setTabIndex,
        tabIndexInput,
        setTabIndexInput,
        scriptInput,
        setScriptInput,
        shouldExecuteScript,
        setShouldExecuteScript,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
}

function useTabsContext() {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("It doesn't have provider for context");
  }

  return context;
}

export { TabsContext, TabsContextProvider, useTabsContext };
