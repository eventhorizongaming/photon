import { ContactMaterial, Material, World } from 'p2-es';
import { defaultConfig } from './defaultConfig.js';
import { Modules } from '../PhysicsModules.js';
import { PhysicsCollisionGroups } from './PhysicsCollisionGroups.js';

class PhysicsWorld {
  world;
  collisionGroups;

  constructor({ physicsModules, simulation, gravity, defaultMaterials } = defaultConfig) {
    this.world = new World();

    this.setPhysicsModules(physicsModules);
    this.setDefaultMaterials(defaultMaterials);

    this.collisionGroups = new PhysicsCollisionGroups();

    console.log({...simulation, ...gravity});
    console.log(this);
  }

  /**
   * Sets the default settings used by the world
   * @param {object} materials
   * @param {Material} [materials.defaultMaterial]
   * @param {ContactMaterial} [materials.defaultContactMaterial]
   */
  setDefaultMaterials({ defaultMaterial, defaultContactMaterial } = {}) {
    defaultMaterial && (this.world.defaultMaterial = defaultMaterial);
    defaultContactMaterial && (this.world.defaultMatdefaultContactMaterialerial = defaultContactMaterial);
  }

  /**
   * Sets the physics modules used to run the simulation
   * @param {object} modules
   * @param {string} [modules.broadphase]
   * @param {string} [modules.narrowphase]
   * @param {string} [modules.solver]
   */
  setPhysicsModules({ broadphase, narrowphase, solver } = {}) {
    broadphase && (this.world.broadphase = new Modules.Broadphases[broadphase]);
    narrowphase && (this.world.narrowphase = new Modules.Narrowphases[narrowphase]);
    solver && (this.world.solver = new Modules.Solvers[solver]);
  }
}

export { PhysicsWorld };
