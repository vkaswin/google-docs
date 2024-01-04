type IConfig = {
  docWidth: number;
  docHeight: number;
  rulerOffset: number;
  defaultFont: string;
  defaultFontSize: string;
  customFonts: string[];
  fonts: Record<string, string>;
  scale: number[];
  fontSizes: string[];
  editor: {
    preventKeys: Set<string>;
    excludeKeys: Set<string>;
  };
};

type IEditorContent = {
  text: string;
  props: {
    bold: boolean;
    strikeThrough: boolean;
    underline: boolean;
    fontSize: string;
    fontFamily: string;
    backgroundColor: string;
    color: string;
    textAlign: string;
    link: boolean;
  };
};
