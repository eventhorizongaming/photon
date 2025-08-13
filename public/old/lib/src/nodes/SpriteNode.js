import { Assets, Sprite, Rectangle } from "pixi.js";
import { GraphicsNode } from "./GraphicsNode.js";

class SpriteNode extends GraphicsNode {
  sprite;

  constructor(spriteSource, x, y, w, h) {
    super();

    this.setType("SpriteNode");
    (async () => {
      await this.setSource(spriteSource);
      h && this.setClipping(x, y, w, h);
    })();
  }

  async setSource(spriteSource) {
    this.sprite = new Sprite(await Assets.load(spriteSource));
    this.sprite.anchor.set(0.5, 0.5);
    this.container.addChild(this.sprite);
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
