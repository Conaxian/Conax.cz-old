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

  normalize(scale: number = 1) {
    this.x = (this.x / this.size) * scale;
    this.y = (this.y / this.size) * scale;
  }
}
