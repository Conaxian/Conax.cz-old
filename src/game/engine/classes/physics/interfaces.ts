import type Vector2 from "./Vector2";

export interface Coordinates {
  x: number,
  y: number,
  leftX: number,
  rightX: number,
  topY: number,
  bottomY: number,
}

export interface Movement {
  velocity: Vector2;
  speed: number;
  move(dt: number): void;
}
