import { useState } from "react";
import clsx from "clsx";
import ScriptTab from "./ScriptTab";
import HtmlTab from "./HtmlTab";
import DadosTab from "./DadosTab";

function InputZone() {
  const [currentTab, setCurrentTab] = useState<
    "script.js" | "index.html" | "dados.js"
  >("script.js");

  function Tabs() {
    switch (currentTab) {
      case "script.js":
        return <ScriptTab />;
      case "index.html":
        return <HtmlTab />;
        "";
      case "dados.js":
        return <DadosTab />;
      default:
        break;
    }
  }

  return (
    <div className="text-sm bg-[#393D3F] min-[700px]:min-h-[250px] max-h-[150px] size-full relative">
      <div className="bg-black flex gap-2 font-bold">
        <button
          type="button"
          onClick={() => setCurrentTab("script.js")}
          className={clsx(
            { "bg-[#393D3F] opacity-100": currentTab === "script.js" },
            "text-white cursor-pointer p-1 px-2 pl-2 opacity-50"
          )}
        >
          script.js
        </button>
        <button
          type="button"
          onClick={() => setCurrentTab("index.html")}
          className={clsx(
            { "bg-[#393D3F] opacity-100": currentTab === "index.html" },
            "px-2 text-white cursor-pointer opacity-50"
          )}
        >
          index.html
        </button>
        <button
          type="button"
          onClick={() => setCurrentTab("dados.js")}
          className={clsx(
            { "bg-[#393D3F] opacity-100": currentTab === "dados.js" },
            "px-2 text-white cursor-pointer opacity-50"
          )}
        >
          dados.js
        </button>
      </div>

      <Tabs />
    </div>
  );
}

export default InputZone;
