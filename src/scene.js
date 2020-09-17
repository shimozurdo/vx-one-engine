import GameObject from "./game.object.js";

class Scene extends GameObject {
  constructor(key, pos = null, size = null, active = true) {
    super("", pos, size, active, active);
    this.sleep = !active;
    this.key = key;
  }

  setSleep(v) {
    this.sleep = v;
  }
}

export default Scene;