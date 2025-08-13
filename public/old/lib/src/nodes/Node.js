import { Container } from "pixi.js";
import { EventEmitter } from "../common/EventEmitter.js";
import { events } from "../constants/events.js";

class Node extends EventEmitter {
  children = [];
  parent;
  container;
  uuid;
  type;

  constructor() {
    super();
    
    this.uuid = crypto.randomUUID();
    this.container = new Container();

    this.setType("Node");

    this.on(events.hierarchyUpdate, (parent) => {
      for (const child of this.children) {
        child.emit(events.hierarchyUpdate, parent);
      }
    });
  }

  setType(type) {
    this.type = type;
    this.container.label = type;
  }

  updateContainer() {
    this.container.removeChild(this.container.children);
    this.container.addChild(...this.children.map(e => e.container));
  }

  addChild(child) {
    this.children.push(child);
    child.parent = this;
    child.emit(events.hierarchyUpdate, this);

    this.updateContainer();
  }

  getParentOfType(type) {
    let current = this.parent;

    while (current) {
      if (current.type === type) {
        return current;
      }

      current = current.parent;
    }

    return null;
  }
}

export { Node };