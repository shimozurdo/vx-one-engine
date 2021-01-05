import Container from "./Container.js";
import Sprite from "./Sprite.js";

class TileMap extends Container {
  constructor(tiles, mapW, mapH, tileW, tileH, texture) {
    super();
    this.mapW = mapW;
    this.mapH = mapH;
    this.tileW = tileW;
    this.tileH = tileH;
    this.w = mapW * tileW;
    this.h = mapH * tileH;

    // Add all tile sprites
    this.children = tiles.map((frame, i) => {
      const s = new Sprite()
      s.frame = frame;
      s.pos.x = i % mapW * tileW;
      s.pos.y = Math.floor(i / mapW) * tileH;
      s.tileW = tileW
      s.tileH = tileH
      s.texture = texture      

      return s;
    });
  }
}

export default TileMap;
