import Sprite from "./Sprite.js";
class TileSprite extends Sprite {
  constructor(name = null) {
    super(name)
    this.frame = { x: 0, y: 0 };
    this.tileW
    this.tileH
  }

  get w() {
    return this.tileW * Math.abs(this.scale.x);
  }

  get h() {
    return this.tileH * Math.abs(this.scale.y);
  }
}

export default TileSprite;
