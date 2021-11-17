export default class Cursor {
  image: string;
  anchorX: number;
  anchorY: number;

  constructor(image: string, anchorX: number, anchorY: number) {
    this.image = image;
    this.anchorX = anchorX;
    this.anchorY = anchorY;
  }

  get css() {
    return (
      `url('game/res/${this.image}.png')` +
      ` ${this.anchorX} ${this.anchorY}, auto`
    );
  }

  apply(element: HTMLElement) {
    element.style.cursor = this.css;
  }
}
