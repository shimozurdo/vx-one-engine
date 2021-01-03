import Render from "./render.js"
import { KeyControls } from "./input.js"
import { MAX_FRAME } from './constants.js'

class Game {
  constructor(config) {
    this.width = config.width
    this.height = config.height
    this.debug = config.debug
    this.renderer = new Render(config)
    config.parent = config.parent || "game"
    let el = document.querySelector(config.parent)
    if (!el) {
      document.body.innerHTML = '<div id="' + config.parent + '"' + '></div>'
    }
    document.getElementById(config.parent).appendChild(this.renderer.view)
    this.scenes = []
    this.scene
    const controls = new KeyControls()
  }

  addScene(scene) {
    this.scenes.push(scene)
    this.scene = scene
    return scene
  }

  run() {
    let dt = 0
    let last = 0
    let fps = 0

    const mainloop = ms => {
      requestAnimationFrame(mainloop)
      // create delta
      const t = ms / 1000
      dt = Math.min(t - last, MAX_FRAME)
      last = t
      fps = Math.round(1 / dt)
      //
      this.scene.update(dt, t)
      this.renderer.render(this.scene, { debug: this.debug, fps })

    }
    requestAnimationFrame(mainloop)
  }
}

export default Game