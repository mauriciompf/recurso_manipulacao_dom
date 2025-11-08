import { clsx } from "clsx";
import { tabs } from "../../../constants/constants";

function InputZone() {
  return (
    <div>
      <div>
        {tabs.map((tab) =>
          tab.outputZone?.map((outputZoneTab, index) => (
            <button
              className={clsx(
                "bg-[#6F777C] cursor-pointer border-r border-r-[#6b7f8e] text-white px-3.5 py-2",
                { "opacity-70": outputZoneTab !== "Document" }
              )}
              key={index}
            >
              {outputZoneTab}
            </button>
          ))
        )}
      </div>

      <div className="bg-white border-8 border-[#D9D9D9] min-w-[600px] min-h-[250px] rounded-tl-none! rounded-[10px]"></div>
    </div>
  );
}

export default InputZone;
