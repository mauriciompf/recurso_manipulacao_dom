import InputZone from "./inputZone/InputZone";
import OutputZone from "./outputZone/OutputZone";

function Slide() {
  return (
    <div className="bg-[#1E1E1E] w-full max-w-[min(700px,calc(100vw/1))] max-h-[min(700px,calc(100vh/1))] aspect-square relative ">
      <div className="size-full m-auto w-[80%] pt-2 absolute bottom-0 left-0 right-0">
        <OutputZone />
        <InputZone />
      </div>
    </div>
  );
}

export default Slide;
