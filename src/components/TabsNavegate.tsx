import clsx from "clsx";
import { tabs } from "../constants/constants";
import { useTabsContext } from "../contexts/tabsContext";

function TabsNavegate() {
  const { tabIndex, setTabIndex } = useTabsContext();

  return (
    <div>
      {tabs.map((tab) =>
        tab.outputZone?.map((currentTab, index) => (
          <button
            onClick={() => {
              console.log(currentTab, index);
              setTabIndex(index);
            }}
            className={clsx(
              "bg-[#6F777C] cursor-pointer border-r border-r-[#6b7f8e] text-white px-3.5 py-2",
              { "opacity-70": currentTab !== tab.outputZone[tabIndex] }
            )}
            key={index}
          >
            {currentTab}
          </button>
        ))
      )}
    </div>
  );
}

export { TabsNavegate };
