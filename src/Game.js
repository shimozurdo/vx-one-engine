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
    this.controls = new KeyControls()
  }

  addScene(scene) {
    this.scenes.push(scene)
    this.scene = scene
    if (this.debug) {
      let fpsTxt = new Text('fps: ')
      fpsTxt.name = 'fps'
      fpsTxt.pos = { x: 5, y: 15 }
      fpsTxt.style = { font: '16px Arial', fill: 'red', align: 'left' }
      this.scene.add(fpsTxt)
    }
    return scene
  }

  init(assets) {

  }

  run(gameUpdate = () => { }) {
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
      if (this.debug)
        this.scene.children.find(c => c.name === 'fps').text = 'fps: ' + fps
      //
      this.scene.update(dt, t)
      gameUpdate(dt, t, this.controls)
      this.renderer.render(this.scene)

    }
    requestAnimationFrame(mainloop)
  }
}

export default Game