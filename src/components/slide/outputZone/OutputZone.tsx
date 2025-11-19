import { createPortal } from "react-dom";
import { CacheProvider } from "@emotion/react";
import { useEffect, useState } from "react";
import createCache from "@emotion/cache";
import CreateHTML from "../../CreateHTML";
import { useDomContext } from "../../../hooks/useDomContext";

function OutputZone() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [cache, setCache] = useState<any | null>(null); // ! ANY
  const { iframeRef, textAreaInput } = useDomContext();

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
  }, [textAreaInput]);

  return (
    <div className="bg-white min-[700px]:min-h-[300px] max-h-[150px] mb-2 size-full overflow-auto">
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
  );
}

export default OutputZone;
