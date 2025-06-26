import { Application } from "pixi.js";
import { Node } from "../common/Node.js";

class GameNode extends Node {
  canvas;
  renderer;

  constructor() {
    super();
  }

  async init(rendererOptions) {
    await this.initRenderer(rendererOptions);
  }

  async initRenderer(options) {
    this.renderer = new Application();
    await this.renderer.init({ background: '#1099bb', resizeTo: window, ...options });
    this.canvas = this.renderer.canvas;
    this.container = this.renderer.stage;
  }
}

export { GameNode };
