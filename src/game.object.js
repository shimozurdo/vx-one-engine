class GameObject {
  constructor() {
    this.name    
    this.children = []
    this.visible = visible
    this.active = active
    this.zIndex = 1
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