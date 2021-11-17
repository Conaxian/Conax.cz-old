import { autoDetectRenderer, Ticker, Container } from "pixi.js";
import type { Renderer, AbstractRenderer } from "pixi.js";

import Color from "../../lib/Color";

import Main from "../objects/Main";
import Cursor from "./Cursor";

export default class Game {
  renderer: Renderer | AbstractRenderer;
  ticker: Ticker;
  stage: Container;
  cursor: Cursor;

  constructor() {
    const backgroundColor = new Color(144, 192, 255).hex;

    this.renderer = autoDetectRenderer({
      width: window.innerWidth,
      height: window.innerHeight,
      resolution: window.devicePixelRatio || 1,
      backgroundColor,
      autoDensity: true,
      antialias: true,
    });

    addEventListener("resize", () =>
      this.renderer.resize(window.innerWidth, window.innerHeight),
    );

    addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    this.ticker = new Ticker();
    this.stage = new Container();

    this.cursor = new Cursor("gui/cursor", 8, 8);
  }

  render(root: HTMLDivElement) {
    this.ticker.start();

    root.append(this.renderer.view);

    document.body.style.margin = "0";

    this.renderer.view.style.position = "absolute";
    this.renderer.view.style.display = "block";
    this.renderer.view.style.inset = "0";

    this.cursor.apply(root);
    this.renderUpdate();
  }

  renderUpdate() {
    const renderUpdate = this.renderUpdate.bind(this);
    requestAnimationFrame(renderUpdate);
    this.renderer.render(this.stage);
  }

  async run() {
    const main = new Main(this);
    await main.create(this.ticker);
    this.renderer.render(this.stage);
  }
}
