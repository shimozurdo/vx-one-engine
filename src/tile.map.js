import GameObject from "./game.object.js"
class TileMap extends GameObject {
    constructor(type, mapW, mapH, tileW, tileH, level) {
        super()
        this.mapW = mapW
        this.mapH = mapH
        this.tileW = tileW
        this.tileH = tileH
        this.w = mapW * tileW
        this.h = mapH * tileH
        this.type = type
    }
}

export default TileMap