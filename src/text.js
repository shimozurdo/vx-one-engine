import GameObject from "./game.object.js"

class Text  {
  constructor(text = "", pos = { x: 0, y: 0 }, style = {}, active = true) {
    this.pos = pos;
    this.text = text
    this.style = style
  }
}

export default Text