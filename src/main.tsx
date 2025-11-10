import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { TabsContextProvider } from "./contexts/tabsContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TabsContextProvider>
      <App />
    </TabsContextProvider>
  </StrictMode>
);
