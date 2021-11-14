type ConversionHint = "string" | "number" | "default";

export default class Color {
  r: number;
  g: number;
  b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  get hex() {
    return (this.r << 16) + (this.g << 8) + this.b
  }

  get css() {
    return "#" + this.hex.toString(16);
  }

  [Symbol.toPrimitive](hint: ConversionHint) {
    switch (hint) {
      case "string":
        return this.css;
      case "number": case "default":
        return this.hex;
    }
  }
}

export function css(r: number, g: number, b: number) {
  const color = new Color(r, g, b);
  return color.css;
}
