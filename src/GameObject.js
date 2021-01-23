import Container from "./Container.js"
class GameObject {
  constructor(name = null) {
    this.name = name
    this.pos = { x: 0, y: 0 }
    this.scale = { x: 1, y: 1 }
    this.anchor = { x: 0, y: 0 }
    this.origin = { x: 0, y: 0 }
    this.rotation = 0
    this.visible = true
    this.zIndex = 1
  }
}

export default GameObject