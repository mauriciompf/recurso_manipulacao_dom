import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DomContextProvider } from "./contexts/domContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DomContextProvider>
      <App />
    </DomContextProvider>
  </StrictMode>
);
