import { useState, type ChangeEvent } from "react";
import { useTabsContext } from "../../../contexts/tabsContext";
import { TabsNavegate } from "../../TabsNavegate";

function TabContentInput({
  tabIndexInput,
  scriptInput,
  handleOnChangeScript,
}: {
  tabIndexInput: number;
  scriptInput: string;
  handleOnChangeScript: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  const htmlInput = `
<!DOCTYPE html>
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

      img,
      .galeria-img {
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

      /* .capas {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }

      .capas > img {
        display: block;
        max-width: 100%;
        height: 100%;
        width: 90px;
        border-radius: 0.5rem;
        aspect-ratio: 1;
      } */
    </style>
  </head>
  <body>
    <main class="container">
      <div class="galeria"></div>
    </main>
  </body>

  <script type="module" src="script.js"></script>
</html>
  `;

  const dataInput = `
    export const albuns = [
  {
    imagem: "./img/agepe.webp",
    artista: "Agepê",
    titulo: "Moro Onde Não Mora Ninguém",
    ano: 1975,
    pais: "Brasil",
    estilo: ["Samba"],
  },
  {
    imagem: "./img/alceu_valenca.webp",
    artista: "Alceu Valença",
    titulo: "Cavalo De Pau",
    ano: 1982,
    pais: "Brasil",
    estilo: ["MPB", "Forró", "Reggae"],
  },
  {
    imagem: "./img/catia.webp",
    artista: "Cátia de França",
    titulo: "20 Palavras Ao Redor Do Sol",
    ano: 1979,
    pais: "Brasil",
    estilo: ["MPB", "Forró", "Folk Rock"],
  },
  {
    imagem: "./img/ednardo.webp",
    artista: "Ednardo",
    titulo: "O Romance Do Pavão Mysteriozo",
    ano: 1974,
    pais: "Brasil",
    estilo: ["MPB", "Folk Rock"],
  },

  {
    imagem: "./img/gilberto_gil.webp",
    artista: "Gilberto Gil",
    titulo: "Refazenda",
    ano: 1975,
    pais: "Brasil",
    estilo: ["Samba", "MPB"],
  },
];
  `;

  switch (tabIndexInput) {
    case 0:
      return (
        <textarea
          value={scriptInput}
          onChange={handleOnChangeScript}
          className="text-[12px] resize-none font-mono text-white outline-none p-4 min-w-full min-h-[230px] rounded-tl-none! rounded-[10px] bg-[#424141]"
        />
      );
    case 1:
      return (
        <textarea
          value={htmlInput}
          disabled={true}
          className="text-[12px] resize-none select-none font-mono text-white outline-none p-4 min-h-[230px] min-w-full  rounded-tl-none! rounded-[10px] bg-[#424141]"
        />
      );
    case 2:
      return (
        <textarea
          value={dataInput}
          disabled={true}
          className="text-[12px] resize-none font-mono text-white outline-none p-4 min-w-full min-h-[230px] overflow-auto rounded-tl-none! rounded-[10px] bg-[#424141]"
        />
      );
    default:
      return null;
  }
}

function InputZone() {
  const {
    tabIndexInput,
    scriptInput,
    setScriptInput,
    shouldExecuteScript,
    setShouldExecuteScript,
  } = useTabsContext();

  const handleOnChangeScript = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setScriptInput(value);

    setShouldExecuteScript(true);
  };

  const handleOnClickRun = () => {
    console.log(scriptInput);
  };

  return (
    <div>
      <TabsNavegate zoneType="inputZone" />
      <TabContentInput
        tabIndexInput={tabIndexInput}
        scriptInput={scriptInput}
        handleOnChangeScript={handleOnChangeScript}
      />

      <div className="flex  items-center justify-between">
        <button className="p-2 cursor-pointer bg-[#000000] text-[#4780D5] rounded-[10px]">
          RESETAR
        </button>
        <div>
          <button
            onClick={handleOnClickRun}
            className="p-2 cursor-pointer bg-[#D54747] text-[#FFFFFF] rounded-[10px]"
          >
            RODAR
          </button>
          <button className="ml-5 opacity-50 p-2 cursor-pointer bg-[#000000] text-[#FFFFFF] rounded-[10px]">
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputZone;
