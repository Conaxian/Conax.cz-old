import { GlobalObject } from "../engine/classes/Object";
import { Camera } from "../engine/classes/physics";

import World from "./World";

type Direction = "left" | "right";
type Directions = Set<Direction>;

export default class Main extends GlobalObject {
  static readonly CAMERA_SPEED = 20;

  world!: World;
  camera!: Camera;
  directions!: Directions;

  override async onCreate() {
    const world = new World();
    await world.create(this.game.ticker, this.game.stage);
    await world.generate();

    this.world = world;
    this.camera = new Camera(world, Main.CAMERA_SPEED);
    this.directions = new Set();
  }

  override async onKeyDown(event: KeyboardEvent) {
    switch (event.code) {
      case "KeyA":
        this.directions.add("left");
        break;
      case "KeyD":
        this.directions.add("right");
        break;
    }
  }

  override async onKeyUp(event: KeyboardEvent) {
    switch (event.code) {
      case "KeyA":
        this.directions.delete("left");
        break;
      case "KeyD":
        this.directions.delete("right");
        break;
    }
  }

  override onTick(dt: number) {
    const left = this.directions.has("left");
    const right = this.directions.has("right");

    if (left !== right) {
      this.camera.velocity.x = left ? -1 : 1;
    } else {
      this.camera.velocity.x = 0;
    }

    this.camera.move(dt);
  }
}
