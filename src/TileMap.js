import Container from "./Container.js";
import Sprite from "./Sprite.js";

class TileMap extends Container {
  constructor(texture = null) {
    super();
    this.mapW
    this.mapH
    this.tileW
    this.tileH
    this.texture = texture
    this.children = []
  }

  addTiles(tiles, scale = 1, isAnim = false) {
    // Add all tile sprites
    this.children = tiles.map((frame, i) => {
      const s = new Sprite(this.texture, isAnim)
      s.frame = frame;
      s.scale = { x: scale, y: scale }
      s.pos.x = i % this.mapW * this.tileW;
      s.pos.y = Math.floor(i / this.mapW) * this.tileH;
      s.tileW = this.tileW
      s.tileH = this.tileH

      return s;
    });
  }
}

export default TileMap;
