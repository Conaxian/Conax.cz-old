export class Random {
  static int(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  static choice(...values: any[]) {
    const i = Random.int(0, values.length);
    return values[i];
  }

  static chance(chance: number) {
    return chance > Math.random();
  }
}

export function clamp(min: number, num: number, max: number) {
  return Math.min(Math.max(num, min), max);
}
