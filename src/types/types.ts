export interface TabsContextType {
  tabIndex: number;
  setTabIndex: (tab: number) => void;
  tabIndexInput: number;
  setTabIndexInput: (tab: number) => void;
  scriptInput: string;
  setScriptInput: (d: string) => void;
  shouldExecuteScript: boolean;
  setShouldExecuteScript: (d: boolean) => void;
}
