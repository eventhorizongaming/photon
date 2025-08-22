import { Body } from "p2-es";
import { PhysicsHitbox } from "./PhysicsHitbox.js";

class PhysicsBody {
  body;
  hitbox;
  world;

  constructor(world, ...bodyParams) {
    this.world = world;
    this.body = new Body();
    this.hitbox = new PhysicsHitbox(this);

    this.world.world.addBody(this.body);
  }
}

export { PhysicsBody };
