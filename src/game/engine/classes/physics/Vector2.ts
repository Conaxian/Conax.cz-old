export default class Vector2 {
  x: number;
  y: number;

  constructor(x: number = 0, y: number = 0) {
    this.x = x;
    this.y = y;
  }

  get size() {
    return Math.abs(this.x) + Math.abs(this.y);
  }

  clone() {
    return new Vector2(this.x, this.y);
  }

  normalize(scale: number = 1) {
    if (!this.size) return;
    const size = this.size;
    this.x = (this.x / size) * scale;
    this.y = (this.y / size) * scale;
  }

  normalized(scale: number = 1) {
    const vector = this.clone();
    vector.normalize(scale);
    return vector;
  }
}
