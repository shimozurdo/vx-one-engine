import Container from "./Container.js"
import { State } from './Constants.js'

class Scene extends Container {
  constructor(key, isActive = false) {
    super()
    this.key = key
    this.active = isActive
    this.state = State.NONE
    this.controls
  }

  getBounds(entity) {
    const { w, h, pos, hitBox } = entity;
    const hit = hitBox || { x: 0, y: 0, w, h };
    return {
      x: hit.x + pos.x,
      y: hit.y + pos.y,
      w: hit.w - 1,
      h: hit.h - 1
    };
  }

  hit(e1, e2) {
    const a = this.getBounds(e1);
    const b = this.getBounds(e2);
    return (
      a.x <= b.x + b.w &&
      a.x + a.w >= b.x &&
      a.y <= b.y + b.h &&
      a.y + a.h >= b.y
    );
  }
}

export default Scene