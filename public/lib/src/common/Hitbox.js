/*
Shapes:
- Box
- Capsule
- Circle
- Convex (just use fromPolygon, which allows for concave as well)
- Line
*/

import { Box } from "p2-es";

class Hitbox {
  body;

  constructor(body) {
    this.body = body;
  }

  addBox(x, y, w, h, a = 0) {
    this.body.addShape(new Box({ width: w, height: h, position: [x, y], angle: a }));
  }

  addCapsule(x, y, l, r, a = 0) {
    this.body.addShape(new Box({ l: l, radius: r, position: [x, y], angle: a }));
  }

  addCircle(x, y, radius) {
    this.body.shapes.push({
      type: 'circle',
      x,
      y,
      radius
    });
  }

  addConvex(points) {
    this.body.shapes.push({
      type: 'convex',
      points
    });
  }

  addLine(x1, y1, x2, y2) {
    this.body.shapes.push({
      type: 'line',
      x1,
      y1,
      x2,
      y2
    });
  }
}

export { Hitbox };