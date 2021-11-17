import { Container } from "pixi.js";
import type { Ticker } from "pixi.js";

import BaseObject from "./BaseObject";
import { Coordinates } from "../physics";

export default class SceneObject extends BaseObject implements Coordinates {
  container!: Container;
  parent?: Container;

  override async create(ticker: Ticker, parent: Container) {
    this.container = new Container();
    this.parent = parent;
    parent.addChild(this.container);

    await super.create(ticker);
  }

  override async destroy() {
    await super.destroy();
    this.parent!.removeChild(this.container);
    this.container.destroy(true);
  }

  override async child(object: BaseObject) {
    await object.create(this.ticker!, this.container);
  }

  get x() {
    return this.container.x;
  }

  set x(value: number) {
    this.container.x = value;
  }

  get y() {
    return this.container.y;
  }

  set y(value: number) {
    this.container.y = value;
  }

  get leftX() {
    return this.container.x - this.container.width / 2;
  }

  get rightX() {
    return this.container.x + this.container.width / 2;
  }

  get topY() {
    return this.container.y - this.container.height / 2;
  }

  get bottomY() {
    return this.container.y + this.container.height / 2;
  }
}
