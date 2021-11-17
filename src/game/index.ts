import Game from "./engine/Game";

export default async function run(root: HTMLDivElement, data: object) {
  const game = new Game();
  game.render(root);
  await game.run();
}
