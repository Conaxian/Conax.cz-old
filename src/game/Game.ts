import { Application } from "pixi.js";

import Color from "../lib/Color";

import main from "./main";

export default class Game {
  app: Application;

  constructor() {
    const backgroundColor = new Color(144, 192, 255).hex;

    this.app = new Application({
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor,
      resizeTo: window,
    });
  }

  async render(root: HTMLDivElement) {
    root.append(this.app.view);
    this.app.view.style.position = "absolute";
    this.app.view.style.inset = "0";
    root.style.cursor = "url('game/res/gui/cursor.png'), auto";
  }

  async run() {
    await main(this.app);
  }
}
