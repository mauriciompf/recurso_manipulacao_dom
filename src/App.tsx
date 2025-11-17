import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { createPortal } from "react-dom";
import { CacheProvider, Global, css } from "@emotion/react";
import createCache from "@emotion/cache";
import hljs from "highlight.js";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

hljs.highlightAll();

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

  const [textAreaInput, setTextAreaInput] = useState<string | null>();

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    // setTextAreaInput(value);

    if (value.startsWith(IMPORTS)) {
      setTextAreaInput(value.slice(IMPORTS.length));
    } else {
      // If imports are not at the beginning, just set the whole value
      // This handles cases where user might have deleted the imports
      setTextAreaInput(value);
    }
  };

  const IMPORTS = `import { albuns } from "./dados.js";\nconst galeria = document.querySelector(".galeria");\n`;

  const handleOnClick = () => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    // Remove previous injected scripts
    const oldScripts = iframe.contentDocument.querySelectorAll(
      "script[data-dynamic]"
    );
    oldScripts.forEach((script) => script.remove());

    // Create new script element
    const scriptEl = iframe.contentDocument.createElement("script");
    scriptEl.setAttribute("data-dynamic", "true");
    scriptEl.textContent = `
    try {
      ${textAreaInput ? textAreaInput : ""}
    } catch (error) {
      console.error('Dynamic script error:', error);
    }
  `;

    iframe.contentDocument.head.appendChild(scriptEl);

    //     const scriptTest = `
    //   for (let i = 0; i < albuns.length; i++) {
    // const img = document.createElement("img");
    // img.src = albuns[i].imagem;
    // img.className = "galeria-img";
    // img.alt = albuns[i].titulo;
    // galeria.appendChild(img);
    // }
    //     `;

    // if (textAreaInput) {
    //   // console.log(textAreaInput);
    //   iframe?.contentWindow?.eval(textAreaInput);
    // }

    // iframe?.contentWindow?.eval(textAreaInput);
    // setTextAreaInput(jsPlaceHolder);
  };

  useEffect(() => {
    const messageHandler = (event: MessageEvent) => {
      if (event.data.type === "EXECUTE_SCRIPT") {
        try {
          // Create a function from the code string
          const func = new Function(event.data.code);
          func();
        } catch (error) {
          console.error("Error executing script:", error);
        }
      }
    };

    window.addEventListener("message", messageHandler);
    return () => window.removeEventListener("message", messageHandler);
  }, []);

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

        // console.log(iframe.contentWindow?.document);
        const jsPlaceHolder = `
        const p = document.createElement("p");
        p.textContent = "lorem lorem loloreeaopsdamsdmskodaskodmnosmdpasmd";
        galeria.appendChild(p);
      `;

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

          <div className="text-sm bg-[#393D3F] min-[700px]:min-h-[250px] max-h-[150px] size-full relative">
            <textarea
              value={IMPORTS}
              readOnly
              spellCheck="false"
              title="Você não pode mudar estas linhas"
              className="overflow-hidden resize-none border-none outline-none tracking-widest size-full p-2 font-mono text-white relative bg-gray-700 opacity-80 cursor-not-allowed"
              style={{ height: "20%" }}
            />
            <textarea
              value={textAreaInput || ""}
              onChange={handleOnChange}
              spellCheck="false"
              className="overflow-auto resize-none border-none outline-none tracking-widest size-full p-2 font-mono text-white relative bg-[#393D3F]"
              style={{ height: "80%" }}
              placeholder="Escreva sua solução aqui..."
            />
            <button
              onClick={handleOnClick}
              type="button"
              className="cursor-pointer font-bold absolute bottom-2 right-2 bg-[#D54747] text-white p-2 rounded-md"
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
