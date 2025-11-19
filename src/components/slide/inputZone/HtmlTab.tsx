import { HTMLCONTENT } from "../../../constants/data";

function HtmlTab() {
  return (
    <pre className="w-full text-white bg-[#393D3F] h-full overflow-auto p-2">
      <code>{HTMLCONTENT}</code>
    </pre>
  );
}

export default HtmlTab;
