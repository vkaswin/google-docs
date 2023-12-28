import EventEmitter from "./EventEmitter";

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

export default class Editor extends EventEmitter {
  private excludeKeys = new Set([
    "Enter",
    "ShiftRight",
    "ShiftLeft",
    "CapsLock",
    "ControlRight",
    "ControlLeft",
    "AltRight",
    "AltLeft",
    "Escape",
    "Insert",
  ]);

  private preventKeys = new Set(["Space", "Tab"]);

  public root: HTMLElement | null = null;

  private content: IEditorContent[] = [];

  constructor(container: string | HTMLElement) {
    super();

    this.root =
      typeof container === "string"
        ? document.querySelector(container)
        : container;

    this.init();
  }

  private init = () => {
    if (!this.root) return;

    this.root.addEventListener("keydown", this.handleKeyDown);
  };

  private handleKeyDown = (event: Event) => {
    let { key, code } = event as KeyboardEvent;

    if (this.excludeKeys.has(code)) return;

    if (this.preventKeys.has(code)) event.preventDefault();

    console.log(key, code);
  };

  public on(event: string, cb: Function) {
    this.addEventListener(event, cb);
  }

  public off(event: string, cb: Function) {
    this.removeEventListener(event, cb);
  }

  public destroy() {
    if (!this.root) return;
    this.root.removeEventListener("keydown", this.handleKeyDown);
    this.removeAllEventListener();
  }

  public setContents() {}

  public getContents() {}
}
