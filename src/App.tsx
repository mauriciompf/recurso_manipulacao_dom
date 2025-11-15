import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CacheProvider, Global, css } from "@emotion/react";
import createCache from "@emotion/cache";

function CreateHTML() {
  return (
    <>
      <Global
        styles={css`
          .container {
            padding: 1rem;
            width: 500px;
            height: 300px;
            overflow: hidden;
            user-select: none;
          }

          .galeria {
            margin-inline: auto;
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }

          img,
          .galeria-img {
            display: block;
            max-width: 100%;
            height: 100%;
            width: 130px;
            border-radius: 0.5rem;
            aspect-ratio: 1;
          }

          .imgContainer {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
          }
        `}
      />
      <main className="container">
        <div className="galeria"></div>
      </main>
    </>
  );
}

function App() {
  const [mountNode, setMountNode] = useState<HTMLElement | null>(null);
  const [cache, setCache] = useState<any | null>(null);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) return;

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
  }, []);

  return (
    <main className="size-full h-screen grid place-items-center">
      <div className="bg-[#1E1E1E] w-full max-w-[min(700px,calc(100vw/1))] max-h-[min(700px,calc(100vh/1))] aspect-square relative ">
        <div className="size-full m-auto w-[80%] pt-2 absolute bottom-0 left-0 right-0">
          <div className="bg-white min-[700px]:min-h-[300px] max-h-[150px] mb-2 size-full overflow-auto">
            <CacheProvider value={cache}>
              <iframe
                id="iframeId"
                title="html content"
                ref={iframeRef}
                className="size-full"
                // sandbox="allow-scripts"
                loading="eager"
              >
                {mountNode && createPortal(<CreateHTML />, mountNode)}
              </iframe>
            </CacheProvider>
          </div>

          <div className="bg-[#393D3F] min-[700px]:min-h-[250px] max-h-[150px] size-full relative">
            <textarea className="overflow-auto resize-none border-none outline-none size-full p-2 font-mono text-white relative"></textarea>
            <button
              type="button"
              className="cursor-pointer font-bold absolute bottom-2 right-2 bg-[#D54747] text-white p-2 rounded-md "
            >
              RODAR
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
