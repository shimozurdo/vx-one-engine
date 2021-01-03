class Vector2 {
    constructor(x = 0, y = 0) { this.x = x; this.y = y; }
    add(v) {
        (v instanceof Vector2) ? (this.x += v.x, this.y += v.y) : (this.x += v, this.y += v)
        return this
    }
    subtract(v) {
        (this.x -= v.x, this.y -= v.y)
        return this
    }
    multiply(v) {
        (v instanceof Vector2) ? (this.x *= v.x, this.y *= v.y) : (this.x *= v, this.y *= v)
        return this
    }
    normalize(scale = 1) {
        let l = this.Length()
        return l > 0 ? this.Multiply(scale / l) : this.Set(scale, y = 0)
    }
    length() {
        return Math.hypot(this.x, this.y)
    }
}

const RGBA = (r = 0, g = 0, b = 0, a = 1) => (`rgba(${r * 255 | 0},${g * 255 | 0},${b * 255 | 0},${a})`)

function randf(min, max) {
    if (max == null) {
      max = min || 1;
      min = 0;
    }
    return Math.random() * (max - min) + min;
  }

function rand(min, max) {
    return Math.floor(randf(min, max))
}

export default {
    Vector2,
    RGBA,
    rand
}