import { Assets, Sprite } from "pixi.js";
import { Node } from "../common/Node.js";

class SpriteNode extends Node {
  sprite;

  constructor(spriteSource) {
    super();

    this.loadSprite(spriteSource);
  }

  async loadSprite(spriteSource) {
    this.sprite = new Sprite(await Assets.load(spriteSource));
    this.sprite.anchor.set(0.5, 0.5);
    this.container.addChild(this.sprite);
  }
}

export { SpriteNode };
