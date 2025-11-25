import type { TextareaHTMLAttributes } from "react";

function ScriptLines({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      id="inputScript"
      spellCheck="false"
      className="overflow-auto resize-none border-none outline-none tracking-widest size-full p-2 font-mono text-white h-[80%] relative bg-[#393D3F]"
      placeholder="Escreva sua solução aqui..."
      {...props}
    />
  );
}

export default ScriptLines;
