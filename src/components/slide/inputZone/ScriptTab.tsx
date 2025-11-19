import type { ChangeEvent } from "react";
import { IMPORTS } from "../../../constants/data";
import { useDomContext } from "../../../hooks/useDomContext";

function ScriptTab() {
  const { textAreaInput, setTextAreaInput, iframeRef } = useDomContext();

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    if (value.startsWith(IMPORTS)) {
      setTextAreaInput(value.slice(IMPORTS.length));
    } else {
      setTextAreaInput(value);
    }
  };

  const handleOnClick = () => {
    const iframe = iframeRef?.current;
    if (!iframe || !iframe.contentWindow || !iframe.contentDocument) return;

    const oldScripts = iframe.contentDocument.querySelectorAll(
      "script[data-dynamic]"
    );
    oldScripts.forEach((script) => script.remove());

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
  };

  return (
    <>
      <textarea
        value={IMPORTS}
        readOnly
        spellCheck="false"
        title="Você não pode mudar estas linhas"
        className="overflow-hidden resize-none border-none outline-none tracking-widest size-full p-2 font-mono text-white h-[20%] relative bg-gray-700 opacity-80 cursor-not-allowed"
      />
      <textarea
        value={textAreaInput || ""}
        onChange={handleOnChange}
        spellCheck="false"
        className="overflow-auto resize-none border-none outline-none tracking-widest size-full p-2 font-mono text-white h-[80%] relative bg-[#393D3F]"
        placeholder="Escreva sua solução aqui..."
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
