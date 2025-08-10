export const defaultConfig = {
  physicsModules: {
    broadphase: 'SAP', // Options: 'Niave', 'SAP'
    narrowphase: 'Internal', // Options: 'Internal'
    solver: 'GaussSeidel', // Options: 'GaussSeidel'
  },
  simulation: {
    applyDamping: true, // Boolean
    applyGravity: true, // Boolean
    applySpringForces: true, // Boolean
    islandSplit: true, // Boolean
    sleepMode: 'body', // Options: 'none', 'body', 'island'
    solveConstraints: true, // Boolean
  },
  gravity: {
    frictionGravity: 0, // Number
    gravity: [0, 9.8], // Vec2
    useFrictionGravityOnZeroGravity: true, // Boolean
    useWorldGravityAsFrictionGravity: true // Boolean
  },
  // defaultMaterials: {
  //   defaultContactMaterial: (...),
  //   defaultMaterial: (...),
  // },
};
