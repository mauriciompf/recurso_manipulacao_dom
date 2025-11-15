import { albuns } from "./dados.js";

const galeria = document.querySelector(".galeria");

// EXERCÍCIO 1.1
for (let i = 0; i < albuns.length; i++) {
  const img = document.createElement("img");
  img.src = albuns[i].imagem;
  img.className = "galeria-img";
  img.alt = albuns[i].titulo;
  galeria.appendChild(img);
}
