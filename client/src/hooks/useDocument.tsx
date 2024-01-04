import { createContext, useContext, ReactNode } from "react";

type DocumentProviderProps = {
  children: ReactNode;
};

type IDocumentContext = {};

const DocumentContext = createContext({} as IDocumentContext);

export const DocumentProvider = ({ children }: DocumentProviderProps) => {
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
