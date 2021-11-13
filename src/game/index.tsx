import Game from "./Game";

export default async function run(root: HTMLDivElement, data: object) {
  const game = new Game();
  game.render(root);
  game.run();
}
