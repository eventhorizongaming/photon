import { Node } from "./Node.js";

class GraphicsNode extends Node {
  constructor() {
    super();

    this.container.label = "GraphicsNode";
  }

  get x() {
    return this.container.position.x;
  }

  set x(val) {
    this.container.position.x = val;
  }

  get y() {
    return this.container.position.y;
  }

  set y(val) {
    this.container.position.y = val;
  }

  get rotation() {
    return this.container.rotation;
  }

  set rotation(val) {
    this.container.rotation = val;
  }
}

export { GraphicsNode };
