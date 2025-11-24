function Requisitos() {
  return (
    <div className="w-full  min-[700px]:min-h-[300px] text-white bg-[#393D3F] overflow-auto p-2 mb-2">
      <h1 className="font-bold text-2xl">Exercício 1 – Galeria de discos</h1>
      <p>
        Desenvolva dinamicamente uma galeria de discos (como mostrado neste
        exemplo [link popup]) utilizando manipulação do DOM. Cada disco deverá
        ser representado por um elemento &lt;img /&gt; gerado via JavaScript.
      </p>
      <p className="font-bold text-xl">Requisitos:</p>
      <ul className="list-disc pl-7">
        <li>
          Para cada disco, gerar um elemento &lt;img /&gt; com a classe
          “galeria-img”
        </li>
        <li>
          Cada elemento &lt;img /&gt;, deve conter os atributos src e alt
          (título) correspondente
        </li>
        <li>
          O código deve percorrer corretamente todos os elementos do array
          albuns
        </li>
        <li>
          Todos os elementos &lt;img /&gt; devem estar dentro da div de classe
          ‘’galeria”
        </li>
      </ul>
      <p>
        Dica: Você pode usar o método forEach() ou map() para percorrer a lista
        e gerar os elementos dinamicamente.
      </p>
    </div>
  );
}

export default Requisitos;
