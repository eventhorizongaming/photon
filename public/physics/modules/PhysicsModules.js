import { Capsule, Circle, Convex, Heightfield, Line, NaiveBroadphase, Narrowphase, Plane, SAPBroadphase, Solver } from "p2-es";

export const Modules = {
  Broadphases: {
    Niave: NaiveBroadphase,
    SAP: SAPBroadphase
  },
  Narrowphases: {
    Internal: Narrowphase
  },
  Solvers: {
    GaussSeidel: Solver
  },
  Shapes: {
    capsule: (options, x, y, length, radius, angle = 0) => new Capsule({ ...options, position: [x, y], length, radius, angle }),
    circle: (options, x, y, radius, angle = 0) => new Circle({ ...options, position: [x, y], radius, angle }),
    convex: (options, x, y, vertices, angle = 0) => new Convex({ ...options, position: [x, y], vertices: vertices.map(e => e.toArray()), angle }),
    heightfield: (options, x, y, heights, spacing, angle = 0) => new Heightfield({ ...options, position: [x, y], heights, elementWidth: spacing, angle }),
    line: (options, x, y, length, angle = 0) => new Line({ ...options, position: [x, y], length, angle }),
    plane: (options, x, y, angle = 0) => new Plane({ ...options, position: [x, y], angle }),
  },
};
