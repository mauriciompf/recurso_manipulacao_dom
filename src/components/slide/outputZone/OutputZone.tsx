import { useTabsContext } from "../../../contexts/tabsContext";
import { TabsNavegate } from "../../tabsNavegate";

function OutputZone() {
  const { tabIndex } = useTabsContext();

  function TabContent() {
    switch (tabIndex) {
      case 0:
        return (
          <div className="bg-white border-8 border-[#D9D9D9] min-w-[600px] min-h-[250px] rounded-tl-none! rounded-[10px]"></div>
        );
      case 1:
        return (
          <div className="text-white font-mono p-4 min-w-[600px] border-[#D9D9D9] border-8 min-h-[250px] rounded-tl-none! rounded-[10px] bg-[#6F777C]">
            // console
          </div>
        );
      case 2:
        return (
          <div className="p-4 text-white min-w-[600px] max-h-[250px] overflow-auto rounded-tl-none! rounded-[10px] bg-[#6F777C]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              suscipit magnam nemo eaque modi illum ipsa iste, ipsam, non cumque
              exercitationem sequi laudantium aperiam nobis incidunt consectetur
              explicabo reprehenderit ad.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              suscipit magnam nemo eaque modi illum ipsa iste, ipsam, non cumque
              exercitationem sequi laudantium aperiam nobis incidunt consectetur
              explicabo reprehenderit ad.
            </p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              suscipit magnam nemo eaque modi illum ipsa iste, ipsam, non cumque
              exercitationem sequi laudantium aperiam nobis incidunt consectetur
              explicabo reprehenderit ad.
            </p>
          </div>
        );

      default:
        break;
    }
  }

  return (
    <div>
      <TabsNavegate />
      <TabContent />
    </div>
  );
}

export default OutputZone;
