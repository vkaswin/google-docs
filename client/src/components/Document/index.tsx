import { useLayoutEffect } from "react";
import Header from "./Header";
import ToolBar from "./ToolBar";

const Document = () => {
  useLayoutEffect(() => {
    document.body.classList.add("overflow-hidden");
  }, []);

  return (
    <div className="w-full h-full">
      <Header />
      <ToolBar />
    </div>
  );
};

export default Document;
