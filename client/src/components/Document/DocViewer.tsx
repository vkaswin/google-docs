import { MouseEvent, useEffect, useRef } from "react";
import { config } from "@/constants";

type IDocViewProps = {};

const DocViewer = ({}: IDocViewProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    let ctx = canvasRef.current.getContext("2d");
    ctxRef.current = ctx;
  }, []);

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
