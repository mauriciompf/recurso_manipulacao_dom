import { type ChangeEvent } from "react";
import { useDomContext } from "../../../hooks/useDomContext";
import ImportLines from "./ImportLines";
import ScriptLines from "./ScriptLines";

function ScriptTab() {
  const { textAreaInput, setTextAreaInput, iframeRef } = useDomContext();

  const handleOnClick = () => {
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

    // Script creation and insert into iframe
    const scriptEl = iframeDocument.createElement("script");
    scriptEl.textContent = textAreaInput;
    iframeDocument.head.appendChild(scriptEl);
  };

  return (
    <>
      <ImportLines />

      <ScriptLines
        value={textAreaInput || ""}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setTextAreaInput(e.target.value)
        }
      />

      <button
        onClick={handleOnClick}
        type="button"
        className="cursor-pointer font-bold absolute bottom-2 right-2 bg-[#D54747] text-white p-2 rounded-md"
      >
        RODAR
      </button>
    </>
  );
}

export default ScriptTab;
