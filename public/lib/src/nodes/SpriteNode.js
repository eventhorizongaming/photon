import { Assets, Sprite, Rectangle } from "pixi.js";
import { GraphicsNode } from "./GraphicsNode.js";

class SpriteNode extends GraphicsNode {
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
  
  setAnchor(...vals) {
    this.sprite.anchor.set(...vals);
  }
}

export { SpriteNode };
