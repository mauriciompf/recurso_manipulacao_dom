import { useTabsContext } from "../../../contexts/tabsContext";
import { TabsNavegate } from "../../TabsNavegate";

function TabContent() {
  const { tabIndex } = useTabsContext();

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
</html>
  `;

  switch (tabIndex) {
    case 0:
      return (
        <div
          className="bg-white border-8 border-[#D9D9D9] min-w-[600px] max-h-[250px] overflow-auto rounded-tl-none! rounded-[10px]"
          dangerouslySetInnerHTML={{ __html: htmlInput }}
        />
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
