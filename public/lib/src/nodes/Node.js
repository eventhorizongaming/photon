import { Container } from "pixi.js";
import { EventEmitter } from "../common/EventEmitter.js";

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

    this.updateContainer();
  }
}

export { Node };