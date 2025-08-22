import { ContactMaterial, Material, World } from 'p2-es';
import { Modules } from '../PhysicsModules.js';
import { PhysicsCollisionGroups } from './PhysicsCollisionGroups.js';
import { Vector } from '../common/Vector.js';
import { PhysicsBody } from '../body/PhysicsBody.js';

const sleepModes = {
  'body': World.BODY_SLEEPING,
  'island': World.ISLAND_SLEEPING,
  'none': World.NO_SLEEPING,
  1: 'none',
  2: 'body',
  4: 'island'
};

/**
 * Represents a physics simulation world, managing global settings, modules, and materials.
 * @class PhysicsWorld
 */
class PhysicsWorld {
  world;
  collisionGroups;
  gravity = new Vector();

  /**
   * Creates an instance of the PhysicsWorld class.
   * @param {Object} config - The parameters for the physics world.
   * @param {Object} config.physicsModules - The physics modules to use.
   * @param {Object} config.simulation - The simulation settings.
   * @param {Object} config.gravity - The gravity settings.
   * @param {Object} config.defaultMaterials - The default materials for the world.
   */
  constructor({ physicsModules, simulation, gravity, defaultMaterials } = {}) {

    // Initialize some class variables
    this.world = new World();
    this.gravity.source = this.world.gravity;
    this.collisionGroups = new PhysicsCollisionGroups();
    this.setDefaultMaterials(defaultMaterials);

    // Set the physics modules
    this.setPhysicsModules({
      broadphase: physicsModules?.broadphase ?? 'SAP',
      narrowphase: physicsModules?.narrowphase ?? 'Internal',
      solver: physicsModules?.solver ?? 'GaussSeidel',
    });

    // Apply the given simulation settings
    this.dampingEnabled = simulation?.dampingEnabled ?? true;
    this.gravityEnabled = simulation?.gravityEnabled ?? true;
    this.springForcesEnabled = simulation?.springForcesEnabled ?? true;
    this.islandSplittingEnabled = simulation?.islandSplittingEnabled ?? true;
    this.constraintSolvingEnabled = simulation?.constraintSolvingEnabled ?? true;
    this.sleepMode = simulation?.sleepMode ?? 'body';

    // Apply the gravity settings
    this.gravity.x = gravity?.gravity[0] ?? 0;
    this.gravity.y = gravity?.gravity[1] ?? 9.8;
    this.frictionGravity = gravity?.frictionGravity ?? 0;
    this.world.useFrictionGravityOnZeroGravity = gravity?.useFrictionGravityOnZeroGravity ?? true;
    this.world.useWorldGravityAsFrictionGravity = gravity?.useWorldGravityAsFrictionGravity ?? true;
  }

  /**
   * Gets whether or not damping is enabled
   */
  get dampingEnabled() {
    return this.world.applyDamping;
  }

  /**
   * Sets whether or not damping is enabled
   */
  set dampingEnabled(v) {
    this.world.applyDamping = v;
  }

  /**
   * Gets whether or not gravity is enabled
   */
  get gravityEnabled() {
    return this.world.applyGravity;
  }

  /**
   * Sets whether or not gravity is enabled
   */
  set gravityEnabled(v) {
    this.world.applyGravity = v;
  }

  /**
   * Gets whether or not spring forces are enabled
   */
  get springForcesEnabled() {
    return this.world.applySpringForces;
  }

  /**
   * Sets whether or not spring forces are enabled
   */
  set springForcesEnabled(v) {
    this.world.applySpringForces = v;
  }

  /**
   * Gets whether or not island splitting is enabled
   */
  get islandSplittingEnabled() {
    return this.world.islandSplit;
  }

  /**
   * Sets whether or not island splitting is enabled
   */
  set islandSplittingEnabled(v) {
    this.world.islandSplit = v;
  }

  /**
   * Gets whether or not constraint solving is enabled
   */
  get constraintSolvingEnabled() {
    return this.world.solveConstraints;
  }

  /**
   * Sets whether or not constraint solving is enabled
   */
  set constraintSolvingEnabled(v) {
    this.world.solveConstraints = v;
  }

  /**
   * Gets the sleep mode ('none', 'body', or 'island')
   */
  get sleepMode() {
    return sleepModes[this.world.sleepMode];
  }

  /**
   * Sets the sleep mode ('none', 'body', or 'island')
   */
  set sleepMode(v) {
    this.world.sleepMode = sleepModes[v];
  }

  /**
   * Gets the world's friction gravity
   */
  get frictionGravity() {
    return this.world.frictionGravity;
  }

  /**
   * Sets the world's friction gravity
   */
  set frictionGravity(v) {
    this.world.frictionGravity = v;
  }

  /**
   * Sets the gravity to equal the value of another vector (non-destructively)
   * @param {number[] | {x: number, y: number}} v
   */
  set gravity(v) {
    this.gravity.set(v[0] ?? v.x ?? 0, v[1] ?? v.y ?? 0);
  }

  /**
   * Sets the default settings used by the world
   * @param {object} materials
   * @param {Material} [materials.defaultMaterial]
   * @param {ContactMaterial} [materials.defaultContactMaterial]
   */
  setDefaultMaterials({ defaultMaterial, defaultContactMaterial } = {}) {
    defaultMaterial ?? (this.world.defaultMaterial = defaultMaterial);
    defaultContactMaterial ?? (this.world.defaultMatdefaultContactMaterialerial = defaultContactMaterial);
  }

  /**
   * Sets the physics modules used to run the simulation
   * @param {object} modules
   * @param {string} [modules.broadphase]
   * @param {string} [modules.narrowphase]
   * @param {string} [modules.solver]
   */
  setPhysicsModules({ broadphase, narrowphase, solver } = {}) {
    broadphase ?? (this.world.broadphase = new Modules.Broadphases[broadphase]);
    narrowphase ?? (this.world.narrowphase = new Modules.Narrowphases[narrowphase]);
    solver ?? (this.world.solver = new Modules.Solvers[solver]);
  }

  /**
   * Creates a new physics body.
   * @param  {...any} bodyParams - The parameters to pass to the PhysicsBody constructor.
   * @returns {PhysicsBody} The created physics body.
   */
  createBody(...bodyParams) {
    return new PhysicsBody(this, ...bodyParams);
  }
}

export { PhysicsWorld };
