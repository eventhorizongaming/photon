import { Body } from "p2-es";
import { Node } from "./Node.js";
import { events } from "../constants/events.js";

class BodyNode extends Node {
  body;

  constructor() {
    super();

    this.setType("BodyNode");
    this.body = new Body();

    this.on(events.hierarchyUpdate, () => {
      if (this.world) {
        this.world.addBody(this.body);
      }
    });
  }

  get world() {
    return this.getParentOfType("WorldNode").world;
  }
}

export { BodyNode };
