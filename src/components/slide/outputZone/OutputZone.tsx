import { useEffect, useState } from "react";
import createCache from "@emotion/cache";
import { useDomContext } from "../../../hooks/useDomContext";
import clsx from "clsx";
import Console from "./Console";
import Requisitos from "./Requisitos";
import { createPortal } from "react-dom";
import { CacheProvider } from "@emotion/react";
import CreateHTML from "../../CreateHTML";

function OutputZone() {
  const [currentTab, setCurrentTab] = useState<
    "documento" | "console" | "requisitos"
  >("console");

  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [cache, setCache] = useState<any | null>(null); // ! ANY
  const { iframeRef, textAreaInput } = useDomContext();

  function Tabs() {
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
    const iframe = iframeRef.current;
    if (!iframe || !iframe?.contentWindow) return;

    const handleLoad = () => {
      const body = iframe.contentWindow?.document?.body;

      if (body) {
        setMountNode(body);
      }

      const cacheConfig = createCache({
        key: "css",
        container: iframe.contentWindow?.document?.head,
        prepend: true,
      });

      if (cacheConfig) {
        setCache(cacheConfig);
      }

      const scriptEl = iframe.contentDocument?.createElement("script");

      if (scriptEl) {
        scriptEl.type = "module";
        scriptEl.src = "./src/script.js";

        iframe.contentDocument?.head.appendChild(scriptEl);

        return () => {
          if (iframe.contentDocument?.head.contains(scriptEl)) {
            iframe.contentDocument?.head.removeChild(scriptEl);
          }
        };
      }
    };

    iframe.addEventListener("load", handleLoad);

    if (iframe.contentDocument?.readyState === "complete") {
      handleLoad();
    }

    return () => iframe.removeEventListener("load", handleLoad);
  }, [iframeRef, textAreaInput]);

  return (
    <>
      <div className="bg-black flex gap-2 font-bold">
        <button
          type="button"
          onClick={() => setCurrentTab("documento")}
          className={clsx(
            { "bg-[#393D3F] opacity-100": currentTab === "documento" },
            "text-white cursor-pointer p-1 px-2 pl-2 opacity-50"
          )}
        >
          documento
        </button>
        <button
          type="button"
          onClick={() => setCurrentTab("console")}
          className={clsx(
            { "bg-[#393D3F] opacity-100": currentTab === "console" },
            "px-2 text-white cursor-pointer opacity-50"
          )}
        >
          console
        </button>
        <button
          type="button"
          onClick={() => setCurrentTab("requisitos")}
          className={clsx(
            { "bg-[#393D3F] opacity-100": currentTab === "requisitos" },
            "px-2 text-white cursor-pointer opacity-50"
          )}
        >
          requisitos
        </button>
      </div>

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

      {currentTab !== "documento" && <Tabs />}
    </>
  );
}

export default OutputZone;
