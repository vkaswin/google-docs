import { createContext, useContext, ReactNode, useEffect, useRef } from "react";
import Editor from "@/editor";

type DocumentProviderProps = {
  children: ReactNode;
};

type IDocumentContext = {};

const DocumentContext = createContext({} as IDocumentContext);

export const DocumentProvider = ({ children }: DocumentProviderProps) => {
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    editorRef.current = new Editor("#editor-container");
    editorRef.current.on("change", handleEditorChange);
    return () => {
      if (!editorRef.current) return;
      editorRef.current.destroy();
    };
  }, []);

  const handleEditorChange = () => {
    console.log("editor change");
  };

  let context: IDocumentContext = {};

  return (
    <DocumentContext.Provider value={context}>
      {children}
    </DocumentContext.Provider>
  );
};

export const useDocument = () => {
  return useContext(DocumentContext);
};
