import Container from "./Container.js"
class Scene extends Container {
  constructor(key, active = true) {
    super()
    this.key = key
    this.children = []
    this.active = active
    this.controls
  }  
}

export default Scene