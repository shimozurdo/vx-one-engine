import GameObject from "./game.object.js";

class Text extends GameObject {
  constructor(text = "", pos = { x: 0, y: 0 }, style = {}, active = true) {
    super("", pos, null, active, active);
    this.text = text;
    this.style = style;
  }
}

export default Text;