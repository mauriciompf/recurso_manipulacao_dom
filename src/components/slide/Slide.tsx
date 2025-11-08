import ProgressBar from "./header/progressBar";
import InputZone from "./inputZone/InputZone";
import OutputZone from "./outputZone/OutputZone";

function Slide() {
  return (
    <section className="bg-[#1E1E1E] w-[min(700px,calc(100vmin/1))] aspect-square">
      <div className="mx-auto w-[90%]">
        <header className="py-10 border-b border-[#272323]">
          <ProgressBar />
        </header>

        <main>
          <InputZone />
          <OutputZone />
        </main>
      </div>
    </section>
  );
}

export default Slide;
