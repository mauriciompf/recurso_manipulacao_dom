import { useTabsContext } from "../../../contexts/tabsContext";
import { TabsNavegate } from "../../TabsNavegate";

function InputZone() {
  const { tabIndex } = useTabsContext();

  function TabContent() {
    switch (tabIndex) {
      case 0:
        return (
          <textarea className="resize-none font-mono text-white outline-none  p-4 min-w-full min-h-[230px] rounded-tl-none! rounded-[10px] bg-[#424141]" />
        );
      case 1:
        return (
          <textarea className="resize-none font-mono text-white outline-none p-4 min-h-[230px] min-w-full  rounded-tl-none! rounded-[10px] bg-[#424141]" />
        );
      case 2:
        return (
          <textarea className="resize-none font-mono text-white outline-none p-4 min-w-full min-h-[230px] overflow-auto rounded-tl-none! rounded-[10px] bg-[#424141]" />
        );
      default:
        break;
    }
  }

  return (
    <div>
      <TabsNavegate zoneType="inputZone" />
      <TabContent />

      <div>
        <button>RESETAR</button>
        <button>RODA</button>
        <button>Próximo</button>
      </div>
    </div>
  );
}

export default InputZone;
