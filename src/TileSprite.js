import AnimManager from "./AnimManager.js";
import GameObject from "./GameObject.js";

class TileSprite extends GameObject {
  constructor(texture = null) {
    super(texture);
    this.frame = { x: 0, y: 0, w: texture.width, h: texture.height }
    this.tileW = w;
    this.tileH = h;
    this.anims = new AnimManager(this);
  }

  update(dt) {
    this.anims.update(dt);
  }

  get w() {
    return this.tileW * Math.abs(this.scale.x);
  }

  get h() {
    return this.tileH * Math.abs(this.scale.y);
  }
}

export default TileSprite;
