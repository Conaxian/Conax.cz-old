import type { Ticker, Container } from "pixi.js";

export default class BaseObject {
  exists: boolean;
  ticker?: Ticker;

  constructor() {
    this.exists = true;
  }

  async create(ticker: Ticker, _?: Container) {
    this.ticker = ticker;

    await this.onCreate();

    ticker.add(this.onTick, this);

    addEventListener("keydown", async (e) => await this.onKeyDown(e));
    addEventListener("keyup", async (e) => await this.onKeyUp(e));
  }

  async destroy() {
    await this.onDestroy();

    this.exists = false;
  }

  async child(object: BaseObject, parent?: Container) {
    await object.create(this.ticker!, parent);
  }

  async onCreate() {}

  async onDestroy() {}

  async onKeyDown(event: KeyboardEvent) {}

  async onKeyUp(event: KeyboardEvent) {}

  onTick(dt: number) {}
}
