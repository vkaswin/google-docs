import { MouseEvent, useRef } from "react";
import { config } from "@/constants";

const DocViewer = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleContextMenu = (event: MouseEvent<HTMLCanvasElement>) => {
    event.preventDefault();
  };

  return (
    <div className="w-[var(--doc-width)] h-[var(--doc-height)] bg-white border-gray border mx-auto cursor-text">
      <canvas
        ref={canvasRef}
        width={config.docWidth}
        height={config.docHeight}
        onContextMenu={handleContextMenu}
      />
    </div>
  );
};

export default DocViewer;
