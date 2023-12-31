import { KeyboardEvent, useEffect, useState } from "react";
import Header from "./Header";
import ToolBar from "./ToolBar";
import DocViewer from "./DocViewer";
import Cursor from "./Cursor";
import HorizontalRuler from "./HorizontalRuler";
import VerticalRuler from "./VerticalRuler";
import { config } from "@/constants";

const Document = () => {
  const [documents, setDocuments] = useState([1, 2]);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    document.body.style.setProperty("--doc-width", `${config.docWidth}px`);
    document.body.style.setProperty("--doc-height", `${config.docHeight}px`);
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    let { key, code } = event;

    if (config.editor.excludeKeys.has(code)) return;

    if (config.editor.preventKeys.has(code)) event.preventDefault();

    console.log(key, code);
  };

  const handleClickDocument = (event: any) => {
    console.log(event);
  };

  return (
    <div className="w-full h-full">
      <Header />
      <ToolBar />
      <HorizontalRuler />
      <div
        className="relative w-full h-[calc(100%-var(--header-height)-var(--toolbar-height)-var(--ruler-size))] bg-light-silve outline-none overflow-auto custom-scrollbar"
        tabIndex={-1}
        onKeyDown={handleKeyDown}
      >
        <VerticalRuler />
        <div className="relative flex flex-col gap-4 py-4 after:absolute after:top-0 after:left-[var(--ruler-size)] after:w-[1px] after:h-full after:bg-gray">
          {documents.map((index) => {
            return <DocViewer key={index} onClick={handleClickDocument} />;
          })}
        </div>
        <Cursor />
      </div>
    </div>
  );
};

export default Document;
