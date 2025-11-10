import clsx from "clsx";
import { tabs } from "../constants/constants";
import { useTabsContext } from "../contexts/tabsContext";

function TabsNavegate({ zoneType }: { zoneType: "outputZone" | "inputZone" }) {
  const { tabIndex, setTabIndex, tabIndexInput, setTabIndexInput } =
    useTabsContext();

  const tabData = tabs.find((tab) => tab[zoneType]);
  const currentTabs = tabData?.[zoneType];

  return (
    <div>
      {currentTabs?.map((currentTab, index) => (
        <button
          onClick={() => {
            if (zoneType === "outputZone") {
              setTabIndex(index);
            }

            if (zoneType === "inputZone") {
              setTabIndexInput(index);
            }
          }}
          className={clsx(
            "bg-[#6F777C] cursor-pointer border-r border-r-[#6b7f8e] text-white px-3.5 py-2",
            {
              "opacity-70":
                (zoneType === "outputZone" && index !== tabIndex) ||
                (zoneType === "inputZone" && index !== tabIndexInput),
            }
          )}
          key={index}
        >
          {currentTab}
        </button>
      ))}
    </div>
  );
}

export { TabsNavegate };
