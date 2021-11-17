import { Sprite, Texture, Loader } from "pixi.js";
import type { Container, Ticker } from "pixi.js";

import BaseObject from "./BaseObject";
import { Coordinates } from "../physics";

export default class VisibleObject extends BaseObject implements Coordinates {
  sprite!: Sprite;
  spritePath: string;
  parent?: Container;

  constructor(path: string) {
    super();
    this.spritePath = path;
  }

  get x() {
    return this.sprite.x;
  }

  set x(value: number) {
    this.sprite.x = value;
  }

  get y() {
    return this.sprite.y;
  }

  set y(value: number) {
    this.sprite.y = value;
  }

  get leftX() {
    return this.sprite.x - this.sprite.width / 2;
  }

  get rightX() {
    return this.sprite.x + this.sprite.width / 2;
  }

  get topY() {
    return this.sprite.y - this.sprite.height / 2;
  }

  get bottomY() {
    return this.sprite.y + this.sprite.height / 2;
  }

  get visible() {
    return this.sprite.visible;
  }

  async show(): Promise<boolean> {
    if (this.sprite.visible) return false;

    this.sprite.visible = true;
    await this.onShow();
    return true;
  }

  async hide(): Promise<boolean> {
    if (!this.sprite.visible) return false;

    this.sprite.visible = false;
    await this.onHide();
    return true;
  }

  override async create(ticker: Ticker, parent: Container) {
    const texture = await this.loadTexture(this.spritePath);
    this.sprite = new Sprite(texture);
    this.sprite.anchor.set(0.5);

    this.ticker = ticker;
    this.parent = parent;
    parent.addChild(this.sprite);

    await this.onCreate();
    await this.onShow();

    ticker.add(this.onTick, this);
  }

  private async loadTexture(path: string) {
    const resource = Loader.shared.resources[path];
    if (resource) return resource.texture;

    const promise = new Promise<Texture>((resolve) => {
      Loader.shared.add(path, `game/res/${path}.png`).load((loader, res) => {
        const texture = res[path].texture!;
        resolve(texture);
      });
    });

    return await promise;
  }

  override async destroy() {
    await this.onHide();
    await this.onDestroy();

    this.parent!.removeChild(this.sprite);
    this.sprite.destroy(true);

    this.exists = false;
  }

  override async child(object: BaseObject) {
    await object.create(this.ticker!, this.sprite);
  }

  async onShow() {}

  async onHide() {}
}
