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
};
