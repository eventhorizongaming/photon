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
};