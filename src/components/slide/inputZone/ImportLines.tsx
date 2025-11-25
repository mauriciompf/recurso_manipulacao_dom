import { IMPORTS } from "../../../constants/data";

function ImportLines() {
  return (
    <textarea
      value={IMPORTS}
      readOnly
      id="imports"
      spellCheck="false"
      title="Você não pode mudar estas linhas"
      className="overflow-hidden resize-none border-none outline-none tracking-widest size-full p-2 font-mono text-white h-[20%] relative bg-gray-700 opacity-80 cursor-not-allowed"
    />
  );
}

export default ImportLines;
