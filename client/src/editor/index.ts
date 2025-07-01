import EventEmitter from "./emitter";

class Editor {
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

  private eventEmitter = new EventEmitter();

  private pageMeta = {
    offset: {},
  } as IPageRect;

  root: HTMLElement | null = null;
  focus = false;

  constructor(container: string | HTMLElement, options?: IEditorOptions) {
    this.setContainer(container);
    if (options) this.setConfig(options);
    this.bindEvents();
  }

  private setConfig = ({
    page: { width, heigth, offset = {} } = {},
  }: IEditorOptions) => {
    if (!this.root) return;

    let rect = this.root.getBoundingClientRect();
    this.pageMeta.width = width || rect.width;
    this.pageMeta.height = heigth || rect.height;
    this.pageMeta.offset.x = offset.x || 15;
    this.pageMeta.offset.y = offset.y || 15;
  };

  private bindEvents = () => {
    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("click", this.handleClickOutSide);
  };

  private handleKeyDown = (event: KeyboardEvent) => {
    if (!this.isFocused()) return;

    let { key, code } = event;

    if (this.excludeKeys.has(code)) return;

    if (this.preventKeys.has(code)) event.preventDefault();

    console.log(key, code);
  };

  private handleClickOutSide = (event: MouseEvent) => {
    if (!this.root) return;
    this.focus = this.root.contains(event.target as HTMLElement);
  };

  private setContainer = (container: string | HTMLElement) => {
    if (typeof container === "string") {
      let element = document.getElementById(container);
      if (!element) throw new Error("Cannot find the element in the dom");
      this.root = element;
    } else if (container instanceof HTMLElement) {
      this.root = container;
    } else {
      throw new Error("Not a valid continer");
    }
  };

  isFocused = () => {
    return this.focus;
  };

  addEventListener: IEditorEvents = (event, cb) => {
    this.eventEmitter.addEventListener(event, cb);
  };

  removeEventListener: IEditorEvents = (event, cb) => {
    this.eventEmitter.removeEventListener(event, cb);
  };
}

export default Editor;
