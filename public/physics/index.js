import p5 from 'p5';
import { PhysicsWorld } from './modules/world/PhysicsWorld.js';

const world = new PhysicsWorld();

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(p.width / 2, p.height / 2, 50, 50);
  };
};

new p5(sketch);