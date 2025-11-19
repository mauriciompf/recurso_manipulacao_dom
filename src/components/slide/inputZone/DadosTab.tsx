import { DADOSCONTENT } from "../../../constants/data";

function DadosTab() {
  return (
    <pre className="w-full text-white bg-[#393D3F] h-full overflow-auto p-2">
      <code>{DADOSCONTENT}</code>
    </pre>
  );
}

export default DadosTab;
