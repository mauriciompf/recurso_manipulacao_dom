export const IMPORTS = `import { albuns } from "./dados.js";\nconst galeria = document.querySelector(".galeria");\n`;

export const HTMLCONTENT = `<!DOCTYPE html>
  <html>
    <head>
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
      </style>
    </head>
    <body>
      <main class="container">
        <div class="galeria"></div>
      </main>
    </body>

    <script type="module" src="script.js"></script>
</html>`;

export const DADOSCONTENT = `export const albuns = [
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
];`;
