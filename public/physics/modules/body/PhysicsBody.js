import { Body } from "p2-es";
import { Hitbox } from "./PhysicsHitbox.js";

class PhysicsBody {
  body;
  hitbox;

  constructor() {
    this.body = new Body();
    this.hitbox = new Hitbox();
  }
}

export { PhysicsBody };
