import { SceneObject } from "../engine/classes/Object";

import Block from "./Block";

export default class Column extends SceneObject {
  blocks!: Block[];

  async generate(height: number, x: number, startY: number) {
    this.blocks = [];

    let y = startY;

    y = await this.addBlockY("bottomrock", x, y);

    for (let i = 0; i < height - 4; i++) {
      y = await this.addBlockY("stone", x, y);
    }

    for (let i = 0; i < 2; i++) {
      y = await this.addBlockY("dirt", x, y);
    }

    y = await this.addBlockY("grass", x, y);
  }

  private async addBlock(type: string, x: number, y: number) {
    const block = new Block("blocks/" + type);
    await block.create(this.ticker!, this.container);

    block.x = x;
    block.y = y;

    this.blocks.push(block);
  }

  private async addBlockY(type: string, x: number, y: number) {
    await this.addBlock(type, x, y);
    y -= Block.BASE_SIZE;
    return y;
  }
}
