import EventEmitter from "./EventEmitter";

type IEditorEvents = "change";

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

  public on(event: IEditorEvents, cb: Function) {
    this.addEventListener(event, cb);
  }

  public off(event: IEditorEvents, cb: Function) {
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
