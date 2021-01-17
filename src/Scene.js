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

  hit(e1, e2) {
    const a = this._bounds(e1)
    const b = this._bounds(e2)
    return (
      a.x + a.w >= b.x &&
      a.x <= b.x + b.w &&
      a.y + a.h >= b.y &&
      a.y <= b.y + b.h
    );
  }

  hits(entity, container, hitCallback) {
    const a = this._bounds(entity);
    container.map(e2 => {
      const b = this._bounds(e2);
      if (
        a.x + a.w >= b.x &&
        a.x <= b.x + b.w &&
        a.y + a.h >= b.y &&
        a.y <= b.y + b.h
      ) {
        hitCallback(e2);
      }
    });
  }

  _bounds(entity) {
    const { w, h, pos, hitBox } = entity;
    const hit = hitBox || { x: 0, y: 0, w, h };
    return {
      x: hit.x + pos.x,
      y: hit.y + pos.y,
      w: hit.w - 1,
      h: hit.h - 1
    };
  }

}

export default Scene