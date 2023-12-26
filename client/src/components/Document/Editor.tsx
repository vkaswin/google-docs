import { useRef } from "react";

const Editor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  return (
    <div className="w-[816px] h-[1056px] bg-white border-gray border mb-4 mx-auto">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default Editor;
