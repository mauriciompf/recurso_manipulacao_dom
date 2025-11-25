import { useContext } from "react";
import { DomContext } from "../contexts/DomContext";

const useDomContext = () => {
  const context = useContext(DomContext);

  if (!context) {
    throw new Error("Unknow Provider...");
  }

  return context;
};

export { useDomContext };
