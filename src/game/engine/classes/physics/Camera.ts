import Vector2 from "./Vector2";
import { Coordinates, Movement } from "./interfaces";

export default class Camera implements Movement {
  anchor: Coordinates;
  velocity: Vector2;
  speed: number;

  constructor(anchor: Coordinates, speed: number) {
    this.anchor = anchor;
    this.velocity = new Vector2();
    this.speed = speed;
  }

  set x(value: number) {
    this.anchor.x -= value;
  }

  set y(value: number) {
    this.anchor.y -= value;
  }

  move(dt: number) {
    const vector = this.velocity.normalized(this.speed * dt);
    this.x = vector.x;
    this.y = vector.y;
  }
}
