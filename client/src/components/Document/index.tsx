import { useEffect, useRef, useState } from "react";
import Editor from "@/editor";
import Header from "./Header";
import ToolBar from "./ToolBar";
import DocViewer from "./DocViewer";
import HorizontalRuler from "./HorizontalRuler";
import VerticalRuler from "./VerticalRuler";
import { config } from "@/constants";

const Document = () => {
  const [documents, setDocuments] = useState([1, 2]);

  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    document.body.style.setProperty("--doc-width", `${config.docWidth}px`);
    document.body.style.setProperty("--doc-height", `${config.docHeight}px`);

    let editor = new Editor("doc-editor", {
      page: {
        width: config.docWidth,
        heigth: config.docHeight,
        offset: { x: 30, y: 30 },
      },
    });

    editorRef.current = editor;
    console.log(editor);
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <ToolBar />
      <HorizontalRuler />
      <div
        id="doc-editor"
        className="relative w-full h-[calc(100%-var(--header-height)-var(--toolbar-height)-var(--ruler-size))] bg-light-silve outline-none overflow-auto custom-scrollbar"
      >
        <VerticalRuler />
        <div className="relative flex flex-col gap-4 py-4 after:absolute after:top-0 after:left-[var(--ruler-size)] after:w-[1px] after:h-full after:bg-gray">
          {documents.map((_, index) => {
            return <DocViewer key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Document;
