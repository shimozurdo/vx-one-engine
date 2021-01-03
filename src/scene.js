class Scene {
  constructor(key, active = true) {
    this.key = key
    this.children = []
    this.active = active
  }

  update(dt, t) {
    this.children = this.children.filter(child => {
      if (child.update) {
        child.update(dt, t, this)
      }
      return child.dead ? false : true
    })
  }

  add(child) {
    this.children.push(child)
    return child
  }

  remove(child) {
    this.children = this.children.filter(c => c !== child)
    return child
  }

  map(f) {
    return this.children.map(f)
  }
}

export default Scene