import { SceneObject } from "../engine/classes/Object";

import { Random, clamp } from "../../lib/Math";

import Column from "./Column";
import Block from "./Block";

export default class World extends SceneObject {
  static readonly WORLD_WIDTH = 256;
  static readonly START_HEIGHT = 64;
  static readonly MIN_HEIGHT = 32;
  static readonly MAX_HEIGHT = 128;

  columns!: Column[];

  async generate() {
    this.columns = [];

    const playerSpawnX = World.WORLD_WIDTH / 2;
    let colHeight = World.START_HEIGHT;

    let x = window.innerWidth / 2;
    const y = window.innerHeight / 2 + World.START_HEIGHT * Block.BASE_SIZE;

    const worldSideSize = (World.WORLD_WIDTH - 1) / 2;
    const leftSideSize = Math.ceil(worldSideSize);
    const rightSideSize = Math.floor(worldSideSize);

    for (let i = 0; i < leftSideSize + 1; i++) {
      const column = new Column();
      await column.create(this.ticker!, this.container);
      await column.generate(colHeight, x, y);

      x -= 64;
      colHeight += this.getHeightDelta();
      colHeight = clamp(World.MIN_HEIGHT, colHeight, World.MAX_HEIGHT);

      this.columns.push(column);
    }

    x = window.innerWidth / 2 + 64;
    colHeight = World.START_HEIGHT + this.getHeightDelta();

    for (let i = 0; i < rightSideSize; i++) {
      const column = new Column();
      await column.create(this.ticker!, this.container);
      await column.generate(colHeight, x, y);

      x += 64;
      colHeight += this.getHeightDelta();
      colHeight = clamp(World.MIN_HEIGHT, colHeight, World.MAX_HEIGHT);

      this.columns.push(column);
    }
  }

  private getHeightDelta() {
    const changed = Random.chance(0.4);
    const doubled = Random.chance(0.25);
    const sign = Random.choice(-1, 1);

    let delta = changed ? 1 : 0;
    delta = doubled ? delta * 2 : delta;
    delta = sign * delta;

    return delta;
  }
}
