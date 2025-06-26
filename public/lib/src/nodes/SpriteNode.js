import { Assets, Sprite, Rectangle } from "pixi.js";
import { Node } from "../common/Node.js";

class SpriteNode extends Node {
  sprite;

  constructor(spriteSource) {
    super();

    this.setSource(spriteSource);
    this.container.label = "SpriteNode";
  }

  async setSource(spriteSource) {
    this.sprite = new Sprite(await Assets.load(spriteSource));
    this.sprite.anchor.set(0.5, 0.5);
    this.container.addChild(this.sprite);
    this.setClipping(0, 0, 16, 32);
  }

  setClipping(x, y, w, h) {
    this.sprite.texture.frame = new Rectangle(x, y, w, h);
    this.sprite.texture.updateUvs();
    this.sprite.width = w;
    this.sprite.height = h;
  }
}

export { SpriteNode };
