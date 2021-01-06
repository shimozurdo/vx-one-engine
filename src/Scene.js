import Container from "./Container.js"
import { State } from './Constants.js'

class Scene extends Container {
  constructor(key, isActive = false) {
    super()
    this.key = key
    this.children = []
    this.active = isActive
    this.state = State.NONE
    this.controls
  }
}

export default Scene