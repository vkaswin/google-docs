export default class EventEmitter {
  private events = new Map<string, Function[]>();

  emit(event: string, ...args: any[]) {
    if (!this.events.has(event)) return;
    let cbs = this.events.get(event)!;
    cbs.forEach((fn) => fn(...args));
  }

  addEventListener(event: string, cb: Function) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(cb);
  }

  removeEventListener(event: string, cb: Function) {
    if (!this.events.has(event)) return;
    let cbs = this.events.get(event)!;
    let index = cbs.findIndex((fn) => cb === fn);
    if (index === -1) return;
    cbs.splice(index, 1);
  }

  removeAllEventListener() {
    this.events = new Map();
  }
}
