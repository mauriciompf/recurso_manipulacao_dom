import { useEffect, useState } from "react";
import createCache from "@emotion/cache";
import { useDomContext } from "../../../hooks/useDomContext";
import clsx from "clsx";
import Console from "./Console";
import Requisitos from "./Requisitos";
import { createPortal } from "react-dom";
import { CacheProvider } from "@emotion/react";
import CreateHTML from "../../CreateHTML";
import TabButtons from "./Tabs";

function OutputZone() {
  const [currentTab, setCurrentTab] = useState<string>("console");

  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [cache, setCache] = useState<any | null>(null); // ! ANY
  const { iframeRef, textAreaInput } = useDomContext();

  function TabContent() {
    switch (currentTab) {
      case "console":
        return <Console />;
      case "requisitos":
        return <Requisitos />;
      default:
        break;
    }
  }

  useEffect(() => {
    if (!iframeRef?.current) {
      console.error("iframeRef is null or undefined");
      return;
    }

    const iframe = iframeRef.current;
    const iframeDocument = iframe.contentDocument;
    if (!iframe.contentWindow || !iframeDocument) {
      console.error("iframe content not accessible");
      return;
    }

    const handleLoad = () => {
      const iframeBody = iframeDocument.body;
      if (iframeBody) setMountNode(iframeBody);

      // Insert emotion styles into iframe (head)
      const cacheConfig = createCache({
        key: "css",
        container: iframeDocument.head,
        prepend: true,
      });
      if (cacheConfig) setCache(cacheConfig);

      // Insert external JavaScript file into iframe (head) (imports)
      const scriptEl = iframeDocument.createElement("script");
      if (scriptEl) {
        scriptEl.type = "module";
        scriptEl.src = "./src/script.js";

        iframeDocument.head.appendChild(scriptEl);

        return () => {
          if (iframeDocument.head.contains(scriptEl))
            iframeDocument.head.removeChild(scriptEl);
        };
      }
    };

    // Call load function if iframe is full loaded
    iframe.addEventListener("load", handleLoad);

    if (iframeDocument.readyState === "complete") handleLoad();

    return () => iframe.removeEventListener("load", handleLoad);
  }, [iframeRef, textAreaInput]);

  return (
    <>
      <TabButtons setCurrentTab={setCurrentTab} currentTab={currentTab} />

      <div
        className={clsx(
          "bg-white min-[700px]:min-h-[300px] max-h-[150px] mb-2 size-full overflow-auto",
          currentTab !== "documento" && "hidden"
        )}
      >
        <CacheProvider value={cache}>
          <iframe
            id="iframeId"
            title="html content"
            ref={iframeRef}
            className="size-full"
            loading="eager"
          >
            {mountNode && createPortal(<CreateHTML />, mountNode)}
          </iframe>
        </CacheProvider>
      </div>

      {currentTab !== "documento" && <TabContent />}
    </>
  );
}

export default OutputZone;
