type ITextChange = () => void;

type IPageChange = () => void;

type ISelectionChange = () => void;

type IEditorEvents = {
  (event: "onTextChange", cb: ITextChange): void;
  (event: "onPageChange", cb: IPageChange): void;
  (event: "onSelectionChange", cb: ISelectionChange): void;
};

type IEditorOptions = {
  page?: {
    width?: number;
    heigth?: number;
    offset?: {
      x?: number;
      y?: number;
    };
  };
};

type IPageRect = {
  width: number;
  height: number;
  offset: {
    x: number;
    y: number;
  };
};
