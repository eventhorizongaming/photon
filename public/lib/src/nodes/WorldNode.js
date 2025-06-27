import { World } from "p2-es";
import { Node } from "./Node.js";

class WorldNode extends Node {
  sprite;

  constructor() {
    super();

    this.setType("WorldNode");
    this.world = new World();
  }
}

export { WorldNode };
