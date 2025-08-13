export const defaultConfig = {
  physicsModules: {
    broadphase: 'SAP', // Options: 'Niave', 'SAP'
    narrowphase: 'Internal', // Options: 'Internal'
    solver: 'GaussSeidel', // Options: 'GaussSeidel'
  },
  simulation: {
    dampingEnabled: true, // Boolean
    gravityEnabled: true, // Boolean
    springForcesEnabled: true, // Boolean
    islandSplittingEnabled: true, // Boolean
    sleepMode: 'body', // Options: 'none', 'body', 'island'
    constraintSolvingEnabled: true, // Boolean
  },
  gravity: {
    frictionGravity: 0, // Number
    gravity: [0, 9.8], // Vec2
    useFrictionGravityOnZeroGravity: true, // Boolean
    useWorldGravityAsFrictionGravity: true // Boolean
  },
  defaultMaterials: {
    defaultContactMaterial: undefined, // ContactMaterial
    defaultMaterial: undefined, // Material
  },
};
