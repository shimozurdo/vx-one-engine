class GameObject {
  constructor(
    name,
    pos = { x: 0, y: 0 },
    size,
    visible,
    active) {
    this.name = name;
    this.size = size;
    this.pos = pos;
    this.children = [];
    this.visible = visible;
    this.active = active;
    this.zIndex = 1;
  }

  add(child) {
    this.children.push(child);
    return child;
  }

  remove(child) {
    this.children = this.children.filter(c => c !== child);
    return child;
  }

  map(f) {
    return this.children.map(f);
  }

  update(dt, t) {
    this.children = this.children.filter(child => {
      if (child.update) {
        child.update(dt, t, this);
      }
      return child.dead ? false : true;
    });
  }
}

export default GameObject;