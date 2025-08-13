import { Modules } from "../PhysicsModules.js";

class PhysicsHitbox {
  shapes = [];

  constructor() {}

  addShape(shape, ...params) {
    // collisionGroup
    // collisionMask
    // collisionResponse
    // material
    // sensor

    if (!Modules.Shapes[shape]) {
      throw new Error(`Could not add shape to hitbox: "${shape}" is not a valid shape.`)
    }

    const shape = Modules.Shapes[shape]({}, ...params);

    console.log(shape);

    this.shapes.push(shape);

    return shape;
  }
}

export { PhysicsHitbox };
