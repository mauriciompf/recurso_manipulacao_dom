import { createContext, useRef, useState, type RefObject } from "react";

interface DomContextType {
  textAreaInput: string | null;
  setTextAreaInput: (e: string) => void;
  iframeRef: RefObject<HTMLIFrameElement | null>;
}

const DomContext = createContext<DomContextType | null>(null);

function DomContextProvider({ children }: { children: React.ReactNode }) {
  const [textAreaInput, setTextAreaInput] = useState("");
  const iframeRef = useRef(null);

  return (
    <DomContext.Provider value={{ textAreaInput, setTextAreaInput, iframeRef }}>
      {children}
    </DomContext.Provider>
  );
}

export { DomContext, DomContextProvider };
