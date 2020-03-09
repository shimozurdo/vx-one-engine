import vx from "../src/index.js";
const { GameObject, Scene } = vx;

class Level1Scene extends GameObject {
  constructor(game) {
    super();
    this.add(new Scene(game.w, game.h));
  }

  update(dt, t) {
    super.update(dt, t);
  }
}

export default Level1Scene;
