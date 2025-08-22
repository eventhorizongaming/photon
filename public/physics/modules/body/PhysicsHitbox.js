import { Material, Shape } from "p2-es";
import { Modules } from "../PhysicsModules.js";

/**
 * Represents a physics hitbox, managing its shape, material, and collision settings.
 * @class PhysicsHitbox
 */
class PhysicsHitbox {
  collisionGroups;
  nextSettings = {};
  body;

  /**
   * Creates an instance of the PhysicsHitbox class.
   * @param {PhysicsBody} body - The body associated with this hitbox.
   */
  constructor(body) {
    this.body = body;
    this.collisionGroups = this.body.world.collisionGroups;
  }

  /**
   * Sets the collision settings for the following shapes hitbox.
   * @param {boolean} collisionResponse - Whether or not the following shapes should respond to collisions.
   * @param {string} [collisionGroup] - The collision group to assign to the following shapes.
   * @param {string} [collisionMask] - The collision mask to assign to the following shapes.
   */
  collision(collisionResponse = true, collisionGroup, collisionMask) {
    this.nextSettings.collisionResponse = collisionResponse;
    
    // If the collision group was specified, use it
    if (collisionGroup) {
      this.nextSettings.collisionGroup = this.collisionGroups.get(collisionGroup);
    }

    // If a collision map was specified, use it
    if (collisionMask) {
      this.nextSettings.collisionMask = this.collisionGroups.mask(collisionMask);
    }
  }

  /**
   * Sets whether the following shapes are sensors.
   * @param {boolean} isSensor - Whether or not the following shapes are sensors.
   */
  isSensor(isSensor) {
    this.nextSettings.sensor = isSensor;
  }

  /**
   * Sets the material for the following shapes.
   * @param {Material} material - The material to assign to the following shapes.
   */
  material(material) {
    this.nextSettings.material = material;
  }

  /**
   * Adds a shape to the hitbox.
   * @param {string} shapeName - The type of shape to add (e.g., "circle", "capsule").
   * @param {...any} params - The parameters required for the shape type.
   * @returns {Shape} The created shape instance.
   */
  shape(shapeName, ...params) {
    // Make sure this is an existing shape type
    if (!Modules.Shapes[shapeName]) {
      throw new Error(`Could not add shape to hitbox: "${shapeName}" is not a valid shape.`)
    }

    // Create the shape and add it to the body
    const shape = Modules.Shapes[shapeName](this.nextSettings, ...params);

    this.body.body.addShape(shape);

    return shape;
  }

  /**
   * Resets the hitbox to its initial state.
   */
  reset() {
    // Reset the settings
    this.nextSettings = {};

    // Remove every shape from the body
    while (this.body.body.shapes.length > 0) {
      this.body.body.removeShape(this.body.body.shapes[0]);
    }
  }
}

export { PhysicsHitbox };
