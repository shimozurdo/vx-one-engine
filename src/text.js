class Text {
    constructor(text = "", pos = { x: 0, y: 0 }, style = {}) {
      this.pos = pos;
      this.text = text;
      this.style = style;
    }
  }
  
  export default Text;