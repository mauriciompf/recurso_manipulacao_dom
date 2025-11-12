import { useTabsContext } from "../../../contexts/tabsContext";
import { TabsNavegate } from "../../TabsNavegate";

function TabContent() {
  const { tabIndex, scriptInput, shouldExecuteScript } = useTabsContext();

  const escapedScript = scriptInput
    .replace(/\\/g, "\\\\") // Escape backslashes first
    .replace(/'/g, "\\'") // Escape single quotes
    .replace(/"/g, '\\"') // Escape double quotes
    .replace(/\n/g, "\\n") // Escape newlines
    .replace(/\r/g, "\\r") // Escape carriage returns
    .replace(/\t/g, "\\t") // Escape tabs
    .replace(/\`/g, "\\`"); // Escape backticks

  const htmlInput = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <style>
      .container {
        padding: 1rem;
        border: 1px solid black;
        width: 500px;
        height: 300px;
        overflow: hidden;
      }
      .galeria {
        margin-inline: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      img, .galeria-img {
        display: block;
        max-width: 100%;
        height: 100%;
        width: 130px;
        border-radius: 0.5rem;
        aspect-ratio: 1;
      }
      .imgContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
    </style>
  </head>
  <body>
    <main class="container">
      <div class="galeria"></div>
    </main>
  </body>
    <script>
      if (${shouldExecuteScript}) {
        try {
          ${escapedScript}
          // Remove placeholder if script runs successfully
          const placeholder = document.getElementById('placeholder');
          if (placeholder) {
            placeholder.remove();
          }
        } catch (error) {
          console.error('Error in user script:', error);
          document.getElementById('gallery').innerHTML = '<p style="color: red;">Error: ' + error.message + '</p>';
        }
      }
    </script>
</html>
  `;

  switch (tabIndex) {
    case 0:
      return (
        <div className="bg-white border-8 border-[#D9D9D9] min-w-[600px] max-h-[250px] overflow-auto rounded-tl-none! rounded-[10px]">
          <iframe
            key={shouldExecuteScript ? "executed" : "not-executed"} // Force re-render
            srcDoc={htmlInput}
            title="Script Output"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
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
      return null;
  }
}
function OutputZone() {
  return (
    <div>
      <TabsNavegate zoneType="outputZone" />
      <TabContent />
    </div>
  );
}

export default OutputZone;
