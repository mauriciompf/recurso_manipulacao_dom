import { useContext } from "react";
import { DomContext } from "../contexts/domContext";

const useDomContext = () => {
  const context = useContext(DomContext);

  if (!context) {
    throw new Error("Unknow Provider...");
  }

  return context;
};

export { useDomContext };
