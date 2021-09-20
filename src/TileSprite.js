import GameObject from "./GameObject.js";

class TileSprite extends GameObject {
  constructor(texture = null) {
    super();
    this.texture = texture
    this.frame = { x: 0, y: 0, w: texture.width, h: texture.height }    
  }

  get w() {
    return this.frame.w * Math.abs(this.scale.x);
  }

  get h() {
    return this.frame.h * Math.abs(this.scale.y);
  }
}

export default TileSprite;
