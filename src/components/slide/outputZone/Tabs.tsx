import clsx from "clsx";

function TabButtons({
  setCurrentTab,
  currentTab,
}: {
  setCurrentTab: (e: string) => void;
  currentTab: string;
}) {
  const outputTabs = ["documento", "console", "requisitos"];

  return (
    <div className="bg-black flex gap-2 font-bold">
      {outputTabs.map((tab, tabIndex) => (
        <button
          type="button"
          key={tabIndex}
          onClick={() => setCurrentTab(tab)}
          className={clsx(
            { "bg-[#393D3F] opacity-100": currentTab === tab },
            "text-white cursor-pointer p-1 px-2 pl-2 opacity-50"
          )}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabButtons;
