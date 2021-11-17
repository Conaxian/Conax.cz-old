import BaseObject from "./BaseObject";

import type Game from "../../Game";

export default class GlobalObject extends BaseObject {
  game: Game;

  constructor(game: Game) {
    super();
    this.game = game;
  }
}
