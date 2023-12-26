import { useLayoutEffect, useState } from "react";
import Header from "./Header";
import ToolBar from "./ToolBar";
import Editor from "./Editor";
import Cursor from "./Cursor";

const Document = () => {
  const [documents, setDocuments] = useState([1, 2]);

  useLayoutEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <ToolBar />
      <div className="relative w-full h-[calc(100%-var(--header-height)-var(--toolbar-height))] bg-light-silver overflow-y-auto custom-scrollbar pt-4 z-10">
        {documents.map((_, index) => {
          return <Editor key={index} />;
        })}
        <Cursor />
      </div>
    </div>
  );
};

export default Document;
